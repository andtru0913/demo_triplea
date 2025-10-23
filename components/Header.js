import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items configuration
  const navigationItems = [
    { displayName: 'Hem', url: '/' },
    { displayName: 'Tjänster', url: '/services' },
    { displayName: 'Om oss', url: '/about' },
    { displayName: 'Kontakta oss', url: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 shadow-lg py-2 border-b border-gray-200/50' 
        : 'bg-white shadow-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item, index) => (
              <Link 
                key={index}
                href={item.url} 
                className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.displayName}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`h-6 w-6 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`absolute h-6 w-6 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-180 scale-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg overflow-hidden">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
                style={{
                  animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.displayName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
