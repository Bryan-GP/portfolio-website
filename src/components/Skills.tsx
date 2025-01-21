interface Skill {
  name: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center
              border border-slate-200 dark:border-slate-700
              hover:border-slate-400 dark:hover:border-slate-500 transition-all
              shadow-sm hover:shadow-md"
          >
            <div className="text-slate-700 dark:text-slate-300 mb-3">
              <span className="text-2xl">{skill.icon}</span>
            </div>
            <h3 className="font-medium text-slate-800 dark:text-slate-200">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};