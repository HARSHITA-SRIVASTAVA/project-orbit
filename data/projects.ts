import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "preptracker",
    title: "PrepTracker",
    subtitle: "MERN-Based Interview Preparation Platform",
    description:
      "A full-stack platform for tracking coding progress, organizing revision schedules, and visualizing preparation analytics.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"],
    category: "Full Stack",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/HARSHITA-SRIVASTAVA/InterviewPrepPlatform_Project",
    liveUrl: "https://interview-prep-platform-project.vercel.app",
  },
  {
    id: 2,
    slug: "emotion-sentiment-analysis",
    title: "Emotion & Sentiment Analysis",
    subtitle: "NLP-Based Text Classification System",
    description:
      "A machine learning project that classifies emotions from textual data using preprocessing, feature extraction, and model evaluation.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP"],
    category: "Machine Learning",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/HARSHITA-SRIVASTAVA/Major-Project-",
  },
  {
    id: 3,
    slug: "whatsapp-bot-backend",
    title: "WhatsApp Bot Backend",
    subtitle: "Spring Boot Webhook Simulation",
    description:
      "A Java Spring Boot backend simulation that accepts WhatsApp-style message events, logs incoming requests, and responds with predefined replies.",
    technologies: ["Java", "Spring Boot", "Maven", "REST API"],
    category: "Backend",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/HARSHITA-SRIVASTAVA/WhatsApp-bot-Assignment",
  },
];