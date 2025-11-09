"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Linkedin, Twitter, Github, ExternalLink, Code, Briefcase, GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

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
      element.scrollIntoView({ behavior: 'smooth' });
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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates and team features.",
      tech: ["Next.js", "Firebase", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with beautiful visualizations and forecasts.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for developers to showcase their work.",
      tech: ["Next.js", "Sanity", "TypeScript"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
    { category: "Other", items: ["Microbiology", "Quality Assurance", "Team Collaboration"] }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
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
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
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
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-3 space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === item ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
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
            Microbiologist turned Full-Stack Developer
          </p>
          
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code and innovative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
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
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce"
          >
            <ChevronDown size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
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
      <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
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
      <section id="projects" className="py-20 px-4">
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
      <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span> & Technologies
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
      <section id="contact" className="py-20 px-4">
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