import { use } from "react";
import { notFound } from "next/navigation";
import { ProjectsProvider } from "@/app/context/services/Project";
import ProjectPage from "./page";
import { ProjectsService } from "@/app/services/Projects";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const project = await ProjectsService.getById(slug);

    if (!project) {
      return notFound();
    }
    return (
      <ProjectsProvider project={project}>
        <ProjectPage/>
      </ProjectsProvider>
    );
  } catch (error) {
    console.error(error);
    return <div className="text-center py-10">Đã xảy ra lỗi tải dữ liệu.</div>;
  }
}
