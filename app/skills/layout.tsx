import SkillsPage from "./page";
import { ProjectsProvider } from "../context/services/Project";
import { ProjectsService } from "../services/Projects";

export default async function Skills() {
  const projectsOutstanding = await ProjectsService.getOutstanding();

  return (
    <ProjectsProvider projectsOutstanding={projectsOutstanding}>
      <SkillsPage />
    </ProjectsProvider>
  );
}
