import { Project } from "@/types/project";

type MissionCardProps = {
  project: Project;
};

export default function MissionCard({ project }: MissionCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>

        <span className="text-xs font-medium text-green-600">
          {project.status}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-black text-slate-950">
        {project.title}
      </h3>

      <p className="mt-2 font-medium text-slate-600">
        {project.subtitle}
      </p>

      <p className="mt-5 leading-relaxed text-slate-600">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-5">
  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
    >
      GitHub ↗
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
    >
      Live Demo ↗
    </a>
  )}

  <a
    href={`/engineering/${project.slug}`}
    className="text-sm font-bold text-purple-600 transition-colors hover:text-purple-700"
  >
    Details →
  </a>
</div>
    </article>
  );
}