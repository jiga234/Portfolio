import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2, Target, Lightbulb, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function CaseStudy() {
  const { id } = useParams();

  // Mock data for case studies
  const caseStudies = {
    'e-commerce-platform': {
      title: 'E-Commerce Platform',
      tagline: 'A high-performance online retail experience.',
      heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'This project involved building a scalable, full-featured e-commerce platform from the ground up. The client needed a modern storefront that could handle high traffic spikes during seasonal sales while maintaining lightning-fast page loads.',
      role: 'Lead MERN Stack Developer',
      timeline: '3 Months',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      problem: 'The previous platform was built on legacy architecture, suffering from slow initial load times (over 4 seconds), high cart abandonment rates due to a clunky checkout process, and poor SEO indexing.',
      solution: 'I architected a new headless commerce solution using Next.js for server-side rendering (SSR), instantly solving the SEO and initial load time issues. I integrated Stripe for a seamless, 1-click checkout experience and used MongoDB for flexible product catalog management.',
      features: [
        'Server-Side Rendering (SSR) for optimal SEO and performance',
        'Secure, PCI-compliant Stripe Payment Integration',
        'Real-time inventory tracking and cart management',
        'Advanced product filtering and search capabilities',
      ],
      results: [
        'Reduced initial page load time by 75% (from 4.2s to 1.1s)',
        'Increased conversion rate by 18% in the first month',
        'Achieved a 98/100 Google Lighthouse Performance Score'
      ],
      stack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API']
    },
    'task-management-app': {
      title: 'Task Management App',
      tagline: 'Real-time collaborative Kanban board for remote teams.',
      heroImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'A robust task management tool designed to help remote teams organize workflows. The focus was on creating a highly responsive, real-time synchronization experience similar to Trello or Asana.',
      role: 'Full Stack Developer',
      timeline: '2 Months',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      problem: 'Teams were struggling with data staleness. When multiple users were editing the same project board, changes required manual page refreshes, leading to conflicting edits and lost data.',
      solution: 'I implemented a real-time WebSocket connection to broadcast board state changes instantly to all connected clients. I also utilized optimistic UI updates so users felt immediate responsiveness, resolving state conflicts via a server-side timestamp resolution strategy.',
      features: [
        'Real-time WebSocket synchronization across clients',
        'Drag-and-drop Kanban board interface',
        'Optimistic UI updates for zero-latency feel',
        'Role-based access control (RBAC) and team workspaces',
      ],
      results: [
        'Zero reported data conflicts since launch',
        'Achieved sub-50ms perceived interaction latency',
        'Scaled to support 1,000+ concurrent active socket connections'
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'Redux Toolkit']
    },
    'ai-content-generator': {
      title: 'AI Content Generator',
      tagline: 'SaaS platform automating marketing copy creation.',
      heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'A SaaS application that leverages Large Language Models to instantly generate high-converting marketing copy, blog posts, and social media captions for digital marketers.',
      role: 'Backend & AI Integration Lead',
      timeline: '1.5 Months',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      problem: 'Integrating raw AI APIs directly into the frontend posed significant security risks and did not allow for a scalable billing system based on usage (tokens).',
      solution: 'I built a robust backend proxy service using Express that securely managed the OpenAI API keys. I implemented a complex credit-based billing system tied to Stripe webhooks, which tracked prompt token usage and dynamically deducted credits from user accounts.',
      features: [
        'Secure backend proxy for LLM API requests',
        'Usage-based token tracking and accounting',
        'Subscription tier management via Stripe Webhooks',
        'Rich text editor with one-click copy and export features',
      ],
      results: [
        'Successfully processed over 500,000 API requests in month one',
        'Maintained 99.9% uptime for the backend proxy',
        'Prevented API abuse through strict rate-limiting algorithms'
      ],
      stack: ['React', 'Express', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Stripe']
    }
  };

  const project = caseStudies[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you are looking for does not exist.</p>
          <Link to="/" className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg pb-24">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft size={20} /> Back to Projects
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              {project.tagline}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white dark:bg-darkCard rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-slate-800">
          
          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">My Role</h4>
              <p className="text-gray-900 dark:text-white font-medium">{project.role}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Timeline</h4>
              <p className="text-gray-900 dark:text-white font-medium">{project.timeline}</p>
            </div>
            <div className="flex gap-4 items-end">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors">
                <ExternalLink size={18} /> Live Site
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors font-medium">
                <FaGithub size={18} /> Code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Target className="text-primary-500" /> Project Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Lightbulb className="text-primary-500" /> The Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border-l-4 border-red-400">
                  {project.problem}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Zap className="text-primary-500" /> The Solution
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border-l-4 border-green-400">
                  {project.solution}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features Delivered</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary-500 shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <section className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-gray-100 dark:border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-3xl border border-primary-100 dark:border-primary-900/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Business Impact</h3>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
