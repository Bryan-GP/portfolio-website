import '../styles/components/Header.css';

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="header-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="page-container py-24 relative">
        <div className="header-content">
          <h1 className="header-title">{title}</h1>
          <p className="header-description">{description}</p>
          <div className="header-buttons">
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};