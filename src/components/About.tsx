import React from 'react';
import { Code2, Palette, Users, Zap } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver exceptional results"
    },
    {
      icon: <Zap className="text-yellow-600" size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 5 years of experience in web development, I'm passionate about transforming ideas into 
                digital reality. My journey started with curiosity about how websites work, and evolved into a 
                deep love for creating seamless user experiences.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I specialize in React, Node.js, and modern web technologies, always staying current with 
                industry trends. Beyond coding, I enjoy mentoring junior developers and contributing to 
                open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    {highlight.icon}
                    <h3 className="font-semibold text-gray-900 ml-3">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};