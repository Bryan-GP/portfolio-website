import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/components/Projects.css';

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="page-container py-16">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              My Projects
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my work, side projects, and contributions to open-source.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 