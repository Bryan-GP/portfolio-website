import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/components/Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    // Navigate to Home or other pages
    return <Link to={path} />;
  };

  return (
    <nav className="nav-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="nav-logo">
              Bryan Piedra
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {['Home', 'Projects', 'Skills'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`nav-link ${
                  isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'nav-link-active'
                    : 'nav-link-inactive'
                }`}
                onClick={() => handleNavigation(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-cyan-600 
                dark:text-slate-400 dark:hover:text-cyan-400 focus:outline-none 
                focus:ring-2 focus:ring-cyan-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden animate-fade-in border-t border-slate-100 dark:border-slate-800">
          <div className="py-2 space-y-1 px-4">
            {['Home', 'Projects', 'Skills'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors
                  ${isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400'
                    : 'text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};