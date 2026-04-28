import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart management, user authentication, and Stripe payment integration. Solved the problem of slow load times by implementing SSR and image optimization.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/e-commerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative Kanban board application for teams. Addressed the challenge of real-time syncing across multiple clients using WebSockets and optimistic UI updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'TypeScript', 'Firebase', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/task-management-app',
    },
    {
      title: 'AI Content Generator',
      description: 'A SaaS tool that uses OpenAI API to generate marketing copy. Built a credit system and subscription model using Stripe billing, overcoming complex state management issues.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stack: ['React', 'Express', 'PostgreSQL', 'OpenAI API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      caseStudyUrl: '/case-study/ai-content-generator',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
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
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                  <Link 
                    to={project.caseStudyUrl} 
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FileText size={16} /> Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
