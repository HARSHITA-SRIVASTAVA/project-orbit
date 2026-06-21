export type ExperienceProject = {
  title: string;
  type: "Client Project" | "Internal Assessment" | "Training Assessment";
  link: string;
  contribution: string[];
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  tools: string[];
  projects: ExperienceProject[];
};