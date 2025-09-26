import type { JSX } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
}

interface ProjectGridProps {
  projects: Project[];
  projectsRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProjectGrid({
  projects,
  projectsRef,
}: ProjectGridProps): JSX.Element {
  return (
    <div
      ref={projectsRef}
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 sm:mb-16 w-full"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card bg-gray-800/30 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 bg-blue-500/20 rounded-md text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
