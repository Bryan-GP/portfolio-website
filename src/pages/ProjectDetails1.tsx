import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center 
        bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        Project not found
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen bg-white dark:bg-slate-900">
      <div className="page-container py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-sm px-3 py-1 bg-slate-100 text-slate-700 
                    dark:bg-slate-800 dark:text-slate-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                  target.classList.add('opacity-50');
                }}
              />
            )}
          </div>

          {/* Project Description */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
                  About the Project
                </h2>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.details && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    Technical Details
                  </h2>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: project.details }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 pt-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 