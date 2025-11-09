"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Code, Briefcase, GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

// Brand Icons (Lucide deprecated these, so we use custom SVGs)
const Linkedin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "HTML Resume",
      description: "My first ever resume website built with pure HTML. A milestone in my coding journey.",
      tech: ["HTML", "CSS"],
      link: "https://omoboi-coder.github.io/html-resume/",
      github: "#"
    },
    {
      title: "HTML Portfolio",
      description: "Initial portfolio website showcasing my early web development skills.",
      tech: ["HTML", "CSS"],
      link: "https://omoboi-coder.github.io/html-portfolio/",
      github: "#"
    },
    {
      title: "Bookmark Landing Page",
      description: "A simple clean website to organise favorite websites efficiently.",
      tech: ["Next.js", "React" ,"JavaScript"],
      link: "https://my-bookmark-landing-page.vercel.app/",
      github: "#"
    },
    {
      title: "Coffer App",
      description: "A Multi-page financial app for payroll management and budgets for your business.",
      tech: ["Next.js", "React" ,"JavaScript"],
      link: "https://my-coffer-landing-page.vercel.app/",
      github: "#"
    },
    {
      title: "Weather App",
      description: "Interactive weather app with beautiful visualizations and forecasts.",
      tech: ["React", "OpenWeather API", "Javascript", "Node.js"],
      link: "https://my-weather-app-pi-opal.vercel.app/",
      github: "#"
    },
    {
      title: "Growtoken App",
      description: "A full Multi-page Agriculture financing and safe investment platform",
      tech: ["Next.js", "React" ,"JavaScript"],
      link: "https://growtoken-landing-page.vercel.app/",
      github: "#"
    },

    {
      title: "Healthcare App",
       description: "A well strutured and multi-page Healthcare app for consultation and book test appointments.",
      tech: ["Next.js", "React" ,"JavaScript"],
      link: "https://my-healthcare-app-three.vercel.app/",
      github: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
    { category: "Other", items: ["Microbiology", "Quality Assurance", "Team Collaboration"] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              BA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:text-xl space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-blue-500'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDarkMode(!darkMode);
                }}
                aria-label="Toggle dark mode"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="md:hidden p-2 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      {/* Mobile Menu Overlay */}
  <div 
  className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`}
  onClick={(e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  }}
  />

      {/* Mobile Menu */}
  <div 
  className={`fixed top-16 left-0 right-0 md:hidden z-40 transition-all duration-500 ease-out ${
    isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
  }`}
  onClick={(e) => e.stopPropagation()}
  >
  <div className={`mx-4 mt-2 rounded-2xl shadow-2xl overflow-hidden ${
    darkMode ? 'bg-gray-800' : 'bg-white'
  }`}>
    {/* Close Button */}
    <div className="flex justify-end px-4 pt-4">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsMenuOpen(false);
        }}
        aria-label="Close menu"
        className={`p-2 rounded-lg transition-colors ${
          darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
        }`}
      >
        <X size={24} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
      </button>
    </div>

    <div className="px-6 pb-8 pt-4 space-y-1">
      {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item, index) => (
        <button
          key={item}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToSection(item);
          }}
          style={{ animationDelay: `${index * 50}ms` }}
          className={`block w-full text-center capitalize py-4 rounded-xl font-semibold text-lg transition-all ${
            activeSection === item 
              ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white scale-105' 
              : darkMode 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-gray-700 hover:bg-gray-100'
          } ${isMenuOpen ? 'animate-slide-in' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
</div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center mt-0 md:mt-8">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-1">
              <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center text-5xl font-bold`}>
                BA
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
             I&apos;m{' '}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bukunmi Akinwamide
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Microbiologist turned Front-End Developer
          </p>
          
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Building beautiful, functional web applications with modern technologies. 
            Passionate about clean code and innovative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={`px-8 py-3 rounded-lg font-semibold border-2 ${
                darkMode 
                  ? 'border-gray-700 hover:bg-gray-800' 
                  : 'border-gray-300 hover:bg-gray-100'
              } transition-all`}
            >
              Get In Touch
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="mt-16 animate-bounce"
          >
            <ChevronDown size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10  px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`rounded-2xl text-[17px] p-8 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-start">My Journey</h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I started as a Microbiologist with a B.Sc. from Ekiti State University, but my passion for 
                technology and creating digital experiences led me to the world of web development.
              </p>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                What began with building simple HTML websites has evolved into creating full-stack applications 
                with modern frameworks and technologies. I bring the same analytical mindset from my science 
                background to solving complex programming challenges.
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                When I&apos;m not coding, you&apos;ll find me learning new technologies, contributing to open-source 
                projects, or exploring creative ways to bring ideas to life through code.
              </p>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center mb-4">
                  <Code className="text-blue-500 mr-3" size={24} />
                  <h4 className="text-xl font-bold">Clean Code Advocate</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  I believe in writing maintainable, scalable code that others can understand and build upon.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center mb-4">
                  <Briefcase className="text-purple-500 mr-3" size={24} />
                  <h4 className="text-xl font-bold">Problem Solver</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  I approach every challenge with analytical thinking and creative solutions.
                </p>
              </div>

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-pink-500 mr-3" size={24} />
                  <h4 className="text-xl font-bold">Continuous Learner</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Always staying updated with the latest technologies and best practices in web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-10 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quality Assurance Officer</h3>
                  <p className="text-blue-500 font-semibold">Johnvent Foods Industry</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  November 2024 - 2025
                </span>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ensuring product quality and safety standards while bringing analytical precision to every task.
              </p>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="flex items-start">
                <GraduationCap className="text-purple-500 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">B.Sc. Microbiology</h4>
                  <p className="text-blue-500">Ekiti State University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of my recent works and projects I&apos;ve built
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center text-purple-500 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-10 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span> & Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <span className="w-2 h-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I&apos;m always open to new opportunities and collaborations. Let&apos;s create something amazing together!
          </p>

          <a
            href="mailto:bukunmiabiodun14@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <Mail className="mr-3" size={24} />
            Get In Touch
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://www.linkedin.com/in/bukunmi-akinwamide-66872522a/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <Linkedin className="text-blue-500" size={24} />
            </a>
            <a
              href="https://x.com/omo__boiii"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <Twitter className="text-blue-400" size={24} />
            </a>
            <a
              href="https://github.com/omoboi-coder"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <Github className="text-purple-500" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Akinwamide Bukunmi. All Rights Reserved.
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with React & Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}