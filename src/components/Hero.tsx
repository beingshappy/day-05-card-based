import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              JS
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            John <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Smith</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code and thoughtful design. 
            Specializing in modern web technologies and user-centered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              View My Work
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
              <Mail size={28} />
            </a>
          </div>
          
          <div className="mt-12">
            <ArrowDown className="mx-auto text-gray-400 animate-bounce" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};