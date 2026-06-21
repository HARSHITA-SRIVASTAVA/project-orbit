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

  problem: string;

  solution: string;

  features: string[];

  challenges: string[];

  learnings: string[];


  githubUrl?: string;
  liveUrl?: string;
};