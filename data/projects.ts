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
    problem: "Students often struggle to organize coding preparation, revision schedules, and track their progress effectively.",
    solution:
      "Built a MERN-based platform to manage preparation plans, visualize analytics, and maintain consistency throughout the interview preparation journey.",
    features: [
      "User Authentication",
      "Progress Tracking",
      "Revision Planner",
      "Analytics Dashboard",
      "Responsive Interface"
    ],
    challenges: [
      "Designing scalable APIs",
      "Managing application state",
      "Structuring reusable components"
    ],
    learnings: [
      "REST API design",
      "JWT Authentication",
      "State management in React",
      "Full-stack architecture"
    ],
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
    problem:
  "Understanding emotions from text can be difficult without automated analysis, especially when working with large amounts of textual data.",

solution:
  "Built an NLP-based machine learning system to preprocess text, extract features, train classification models, and predict emotions from textual input.",

features: [
  "Text Preprocessing",
  "Feature Extraction",
  "Model Training",
  "Sentiment Classification",
  "Performance Evaluation"
],

challenges: [
  "Cleaning and preparing textual data",
  "Selecting suitable machine learning models",
  "Evaluating model performance"
],

learnings: [
  "NLP preprocessing techniques",
  "Feature extraction",
  "Model evaluation",
  "Team-based academic project workflow"
],
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
    problem:
  "Backend systems often need to receive external events through webhooks and respond with structured outputs.",

solution:
  "Built a Spring Boot webhook simulation that accepts WhatsApp-style JSON messages, logs incoming requests, and returns predefined automated responses.",

features: [
  "Webhook Endpoint",
  "JSON Request Handling",
  "Automated Replies",
  "Incoming Message Logging",
  "REST API Simulation"
],

challenges: [
  "Designing a clean REST endpoint",
  "Handling JSON request payloads",
  "Structuring a Spring Boot assignment project"
],

learnings: [
  "Spring Boot REST API basics",
  "Webhook request flow",
  "Maven project structure",
  "Backend request-response handling"
],
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/HARSHITA-SRIVASTAVA/WhatsApp-bot-Assignment",
  }
];