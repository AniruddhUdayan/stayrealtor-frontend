import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Product', to: '#' },
  { label: 'Features', to: '#' },
  { label: 'Marketplace', to: '#' },
  { label: 'Company', to: '#' },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <svg className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="currentColor" /></svg>
          <span className="font-extrabold text-xl tracking-tight text-white">StayRealtor</span>
        </Link>
        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.to}
              className="text-white font-semibold text-base hover:text-primary-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Login Button */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-white font-semibold text-base hover:text-primary-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 