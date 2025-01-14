import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            DevPortfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => (
  <>
    <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
    <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
    <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
    <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
  </>
);

const SocialLinks = () => (
  <>
    <a href="https://github.com/whitevolfe" className="text-gray-600 hover:text-gray-900">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/mohamed-azeem1/" className="text-gray-600 hover:text-gray-900">
      <Linkedin size={20} />
    </a>
    <a href="mailto:azeemshanr@gmail.com" className="text-gray-600 hover:text-gray-900">
      <Mail size={20} />
    </a>
  </>
);

export default Header;