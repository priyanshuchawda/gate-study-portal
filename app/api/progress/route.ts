import { NextRequest, NextResponse } from "next/server";
import { readSession, sessionCookie } from "@/lib/auth";
import { clearProgress, loadPreferences, loadProgress, saveLastExam, updateTopic } from "@/lib/cloud-store";

const validTopic = /^[a-z0-9-]{1,180}$/;
const response = (data: unknown, status = 200) => NextResponse.json(data, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });

function userId(request: NextRequest) {
  return readSession(request.cookies.get(sessionCookie.name)?.value)?.userId;
}

function sameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin;
}

export async function GET(request: NextRequest) {
  const id = userId(request);
  if (!id) return response({ error: "Sign in required." }, 401);
  try {
    const [progress, preferences] = await Promise.all([loadProgress(id), loadPreferences(id)]);
    return response({ progress: progress.value, lastExam: preferences.value.lastExam ?? "CSE" });
  } catch {
    return response({ error: "Cloud sync is temporarily unavailable." }, 503);
  }
}

export async function PATCH(request: NextRequest) {
  const id = userId(request);
  if (!id) return response({ error: "Sign in required." }, 401);
  if (!sameOrigin(request)) return response({ error: "Invalid request." }, 403);
  try {
    const body = await request.json() as { topicId?: unknown; completed?: unknown; lastExam?: unknown };
    if (body.lastExam === "DA" || body.lastExam === "CSE") {
      return response({ lastExam: await saveLastExam(id, body.lastExam) });
    }
    if (typeof body.topicId !== "string" || !validTopic.test(body.topicId) || typeof body.completed !== "boolean") return response({ error: "Invalid progress update." }, 400);
    return response({ progress: await updateTopic(id, body.topicId, body.completed) });
  } catch {
    return response({ error: "Could not save progress. Please try again." }, 503);
  }
}

export async function DELETE(request: NextRequest) {
  const id = userId(request);
  if (!id) return response({ error: "Sign in required." }, 401);
  if (!sameOrigin(request)) return response({ error: "Invalid request." }, 403);
  try {
    await clearProgress(id);
    return response({ progress: {} });
  } catch {
    return response({ error: "Could not reset progress. Please try again." }, 503);
  }
}
