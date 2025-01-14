import React from 'react';
import { ArrowRight } from 'lucide-react';
import azeem from '../Images/Azeem.png' 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mohamed Azeem
              {/* <span className="block text-blue-600">Building Digital Solutions</span> */}
              
            </h1>
            <h1 className="text-5xl md:text-5xl font-bold mb-6"><span className="block text-blue-600"> Software Engineer</span></h1>
            <p className="text-xl text-gray-600 mb-8">
              Passionate about creating elegant, efficient, and user-friendly applications
              that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center hover:translate-x-1 duration-300"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition hover:scale-105 duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-blob"></div>
              <picture>
                <source
                  media="(min-width: 768px)"
                  src={azeem}
                />
                <img
                  src={azeem}
                  alt="Professional headshot"
                  className="relative w-[300px] md:w-[400px] h-auto mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 hover:rotate-2"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;