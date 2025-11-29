import React, { useState } from 'react';
import { NavItem } from '../types';
import Button from './Button';
import { Menu, X, HeartPulse } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', path: '#' },
    { label: 'Leadership', path: '#leadership' },
    { label: 'Services', path: '#services' },
    { label: 'Compliance', path: '#compliance' },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <HeartPulse className="h-8 w-8 text-brand-teal" />
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-brand-dark tracking-tight">FNDLY CARE</span>
              <span className="text-[10px] font-sans font-bold text-brand-gray tracking-wider uppercase">Online Vet Services</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-600 hover:text-brand-teal font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="accent" onClick={() => handleNavClick('#contact')}>
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-brand-teal focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-teal hover:bg-brand-light"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-3">
              <Button variant="accent" fullWidth onClick={() => handleNavClick('#contact')}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;