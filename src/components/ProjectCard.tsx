import { useState } from 'react';
import { Project } from '../types/ProjectType';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/project/${project.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-slate-800 border border-slate-200 
        dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg 
        transform hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-video bg-slate-100 dark:bg-slate-900 
          rounded-t-xl overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-slate-900/80 flex items-center 
              justify-center p-6 text-white animate-fade-in">
              <p className="text-sm leading-relaxed text-center text-slate-100">
                {project.description}
              </p>
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 
                    dark:bg-slate-700 dark:text-slate-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-slate-600 dark:text-slate-400 font-medium 
              group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
              View Project Details →
            </span>
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 dark:text-slate-500 
                  dark:hover:text-slate-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}; 