import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const navLinks = [
  { label: 'Product', to: '#' },
  { label: 'Features', to: '#' },
  { label: 'Marketplace', to: '#' },
  { label: 'Company', to: '#' },
];

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <svg className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="currentColor" /></svg>
          <span className="font-extrabold text-xl tracking-tight text-white dark:text-white light:text-neutral-900">StayRealtor</span>
        </Link>
        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.to}
              className="text-white dark:text-white light:text-neutral-900 font-semibold text-base hover:text-primary-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Login Button & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 bg-white/10 hover:bg-primary-600/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
          <a
            href="#"
            className="text-white dark:text-white light:text-neutral-900 font-semibold text-base hover:text-primary-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 