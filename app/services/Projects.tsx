import { createClient } from "@/lib/server";
import { Projects } from "../types/projects";

export const ProjectsService = {
  async getAll(): Promise<Projects[] | null> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("projects").select("*");

    if (error) throw new Error(`Lỗi getAllProjects: ${error.message}`);
    return data;
  },

  async getOutstanding(): Promise<Projects[] | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        techs:project_tech_stacks (
      ...tech_stacks (
        id,
        name
      )
    ),
    images:project_images (
      image_url
    )
      `,
      )
      .eq("is_outstanding", true)
      .limit(6);

      const formattedData = (data || []).map((project: any) => ({
        ...project,
        images: project.images?.map((img: any) => img.image_url) || [],
      }));
      
    console.log("data: ", formattedData);
    if (error) throw new Error(`Lỗi getOutstandingProjects: ${error.message}`);
    return formattedData;
  },

  async getById(id: string): Promise<Projects | null> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .maybeSingle<Projects>();

    if (error) throw new Error(`Lỗi getProjectsById: ${error.message}`);
    return data;
  },
};
