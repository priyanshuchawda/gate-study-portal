import StudyPortal from "@/components/study-portal";
import { getChecklist, getFormulaSections } from "@/lib/study-data";

export default async function Home() {
  const [daSubjects, daFormulas, cseSubjects, cseFormulas] = await Promise.all([
    getChecklist("DA"),
    getFormulaSections("DA"),
    getChecklist("CSE"),
    getFormulaSections("CSE"),
  ]);

  return (
    <StudyPortal
      daSubjects={daSubjects}
      daFormulas={daFormulas}
      cseSubjects={cseSubjects}
      cseFormulas={cseFormulas}
    />
  );
}
