import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Activity, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import CaseStudy from '../../pages/CaseStudy';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart management, user authentication, and Stripe payment integration. Solved the problem of slow load times by implementing SSR and image optimization.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/e-commerce-platform',
    },
    {
      id: 'school-management-system',
      title: 'School Management System',
      description: 'A comprehensive web platform for managing student records, attendance, grades, and fee collection built using PHP and MySQL. Features secure role-based portals for admins, teachers, and parents.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/school-management-system',
    },
    {
      id: 'text-steganography',
      title: 'Text Steganography',
      description: 'An Android application for secure data hiding, enabling users to encode secret messages within ordinary text using custom steganographic algorithms. Features interactive UI and secure client-side processing.',
      image: '/Portfolio/steganography.png',
      stack: ['Android', 'Java', 'XML'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
      caseStudyUrl: '/case-study/text-steganography',
    },
    {
      id: 'blogify',
      title: 'Blogify',
      description: 'A dynamic, server-side rendered blogging platform. Users can write, publish, and manage blog posts with markdown support, secure authentication, and a responsive reading layout.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/blogify',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent works. Each project presented unique challenges that helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkCard rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 flex flex-col hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex-wrap">
                  <button 
                    onClick={() => setSelectedProject(project.id)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    <FileText size={16} /> Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <CaseStudy 
            id={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
