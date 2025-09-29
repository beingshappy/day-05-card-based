import React from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Cloud, 
  Shield,
  Zap,
  Monitor
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="text-blue-600" size={28} />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend",
      icon: <Database className="text-green-600" size={28} />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Design",
      icon: <Palette className="text-purple-600" size={28} />,
      skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "DevOps",
      icon: <Cloud className="text-orange-600" size={28} />,
      skills: ["Docker", "AWS", "Vercel", "CI/CD"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="text-pink-600" size={28} />,
      skills: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Tools",
      icon: <GitBranch className="text-indigo-600" size={28} />,
      skills: ["Git", "VS Code", "Webpack", "Jest"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 3 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};