import '../styles/components/Skills.css';

const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Languages' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'Linear Algebra', icon: '📊', category: 'Backend' },
  { name: 'Java', icon: '☕', category: 'Languages' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
];

export const SkillsPage = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="page-container py-16">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Skills & Expertise
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </header>

          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category} className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                  {category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div 
                        key={skill.name}
                        className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center
                          border border-slate-200 dark:border-slate-700
                          hover:border-slate-400 dark:hover:border-slate-500 
                          transition-all shadow-sm hover:shadow-md"
                      >
                        <div className="text-slate-700 dark:text-slate-300 mb-3 text-2xl">
                          {skill.icon}
                        </div>
                        <h3 className="font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 