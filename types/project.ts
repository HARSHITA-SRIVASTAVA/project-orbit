export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;

  description: string;

  technologies: string[];

  category:
    | "Full Stack"
    | "Backend"
    | "Machine Learning";

  status: "Completed" | "In Progress";

  featured: boolean;

  githubUrl?: string;
  liveUrl?: string;
};