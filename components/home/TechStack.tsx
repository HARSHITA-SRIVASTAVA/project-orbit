const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "MongoDB",
  "AWS",
];

export default function TechStack() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}