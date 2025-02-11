import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectDetails } from './pages/ProjectDetails1';
import './styles/App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <Home />
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;