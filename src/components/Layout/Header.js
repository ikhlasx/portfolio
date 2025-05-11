import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-neon-darker bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-neon-cyan text-neon-darker flex items-center justify-center font-bold text-xl">
              IP
            </div>
            <span className="text-white font-bold text-xl">IKHLAS PV</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/#mission-control" label="Mission Control" />
            <NavLink href="/#projects" label="Projects" />
            <NavLink href="/#skills" label="Skills" />
            <NavLink href="/#experience" label="Experience" />
            <NavLink href="/console" label="Console" />
            <NavLink href="/#contact" label="Contact" />
          </nav>

          <button
            className="md:hidden text-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 neon-card">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/#mission-control" label="Mission Control" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/#projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/#skills" label="Skills" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/#experience" label="Experience" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/console" label="Console" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors duration-300 text-white hover:text-neon-cyan"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ href, label, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 text-white hover:text-neon-cyan transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;