import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">DevPortfolio</h3>
            <p className="mt-2 text-gray-400">Building the future, one line at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/whitevolfe" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-azeem1/" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a target="_blank" href="mailto:azeemshanr@gmail.com" className="hover:text-blue-400 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohamed Azeem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;