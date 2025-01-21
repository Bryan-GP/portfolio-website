import { Header } from '../components/Header';
import { ProjectsSection } from '../components/Projects';
import { SkillsSection } from '../components/Skills';
import { ContactSection } from '../components/Contact';
import { projects } from '../data/projects';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Linear Algebra', icon: '📊' },
  { name: 'Java', icon: '☕️' },
  { name: 'Docker', icon: '🐳' },
];

export const Home = () => {
  return (
    <div className="animate-fade-in min-h-screen bg-gradient-to-b from-slate-50 to-white 
      dark:from-slate-900 dark:to-slate-800">
      <Header 
        title="Welcome to My Portfolio"
        description="A Second Year Computer Science and Mathematics Student at Queen Mary University of London with experience in game development, cryptography, cybersecurity, and sustainability projects. Skilled in Python, Java, and C#, with a proven ability to learn new technologies quickly and collaborate effectively in teams. Seeking a placement year in the tech industry to contribute to innovative projects and further develop my skills."
      />

      <main className="page-container py-16">
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection 
          linkedIn="https://linkedin.com/in/bryan-piedra"
        />
      </main>
    </div>
  );
};

export default Home;
//For all components it is possible to have a class name for the css using tailwind and just put all the css on the external file instead
//saves brain power