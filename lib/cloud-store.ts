import { BlobPreconditionFailedError, get, put } from "@vercel/blob";

export type User = { id: string; name: string; normalizedName: string; createdAt: string };
export type StudyTrack = "DA" | "CSE";
type Stored<T> = { value: T; etag?: string };

const usersPath = "studydesk/v1/users.json";
const maxProfiles = 20;

async function readJson<T>(pathname: string, fallback: T): Promise<Stored<T>> {
  const result = await get(pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return { value: fallback };
  return { value: (await new Response(result.stream).json()) as T, etag: result.blob.etag };
}

async function writeJson<T>(pathname: string, value: T, etag?: string) {
  return put(pathname, JSON.stringify(value), {
    access: "private",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
    ...(etag ? { ifMatch: etag } : {}),
  });
}

export async function loadUsers() {
  return readJson<User[]>(usersPath, []);
}

export async function addUser(user: User) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const users = await loadUsers();
    if (users.value.length >= maxProfiles) throw new Error("PROFILE_LIMIT");
    if (users.value.some((item) => item.normalizedName === user.normalizedName)) throw new Error("NAME_TAKEN");
    try {
      await writeJson(usersPath, [...users.value, user], users.etag);
      return;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
}

const progressPath = (userId: string) => `studydesk/v1/progress/${userId}.json`;
const preferencesPath = (userId: string) => `studydesk/v1/preferences/${userId}.json`;

async function writeProgress(userId: string, value: Record<string, boolean>) {
  return put(progressPath(userId), JSON.stringify(value), {
    access: "private",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
  });
}

export async function loadProgress(userId: string) {
  return readJson<Record<string, boolean>>(progressPath(userId), {});
}

export async function updateTopic(userId: string, topicId: string, completed: boolean) {
  const progress = await loadProgress(userId);
  const next = { ...progress.value, [topicId]: completed };
  await writeProgress(userId, next);
  return next;
}

export async function clearProgress(userId: string) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const progress = await loadProgress(userId);
    try {
      await writeJson(progressPath(userId), {}, progress.etag);
      return;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
}

export async function loadPreferences(userId: string) {
  return readJson<{ lastExam?: StudyTrack }>(preferencesPath(userId), {});
}

export async function saveLastExam(userId: string, lastExam: StudyTrack) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const preferences = await loadPreferences(userId);
    try {
      await writeJson(preferencesPath(userId), { ...preferences.value, lastExam }, preferences.etag);
      return lastExam;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
  throw new Error("Could not save study preference.");
}
