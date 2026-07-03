import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Target, Lightbulb, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function CaseStudy({ id, onClose }) {

  // Mock data for case studies
  const caseStudies = {
    'e-commerce-platform': {
      title: 'E-Commerce Platform',
      tagline: 'A high-performance online retail experience.',
      heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'This project involved building a scalable, full-featured e-commerce platform from the ground up. The client needed a modern storefront that could handle high traffic spikes during seasonal sales while maintaining lightning-fast page loads.',
      role: 'Lead MERN Stack Developer',
      timeline: '1 Month',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
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
    'school-management-system': {
      title: 'School Management System',
      tagline: 'Comprehensive digital administration for modern schools.',
      heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'This school management platform streamlines academic workflows and communications. It provides dedicated portals for administrators, teachers, parents, and students to track attendance, grades, announcements, and tuition payments securely.',
      role: 'Full Stack Developer',
      timeline: '1.5 Months',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
      problem: 'The school relied on manual paper logs and fragmented spreadsheets, resulting in slow communication of grades, high admin overhead for fee tracking, and security vulnerabilities with student records.',
      solution: 'I built a robust web application with separate role-based dashboards. Built a real-time notification system for announcements, automated grading reports, and integrated a payment gateway for secure fee payments.',
      features: [
        'Secure Role-Based Access Control (RBAC)',
        'Real-time student attendance and grade tracking',
        'Automated fee invoicing and online receipt generation',
        'Parent-teacher communication dashboard',
      ],
      results: [
        'Reduced administrative processing time by 40%',
        'Improved grading report turnaround from 2 weeks to instantaneous',
        'Supported over 5,000 active student and parent profiles'
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    'text-steganography': {
      title: 'Text Steganography',
      tagline: 'Undetectable secret messaging hidden in plain text on Android.',
      heroImage: '/Portfolio/steganography.png',
      overview: 'An Android application designed to encrypt and conceal secret payloads inside standard decoy text. By using steganographic unicode zero-width manipulation, the hidden messages are invisible in any typical editor or communications channel.',
      role: 'Android developer',
      timeline: '20 Days',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
      problem: 'Standard encrypted strings look suspicious and can trigger active blocks or detection by automated text filters, whereas steganography allows the data to masquerade as standard natural language.',
      solution: 'I designed a mobile app that processes and encrypts text using AES and translates the bytes into invisible non-printable Unicode characters embedded dynamically into an Android edit text view. XML-based user experience enables quick encode/decode cycles.',
      features: [
        'AES encryption of hidden payload with custom passphrases',
        'Zero-width steganographic text processing engine',
        'Responsive XML UI layouts with copy-to-clipboard functionality',
        'No external network requirements for local offline usage',
      ],
      results: [
        'Successfully tested compatibility across multiple Android API versions',
        'Guaranteed zero leakage of data into system logs',
        'High performance UI with sub-10ms encode execution time'
      ],
      stack: ['Android', 'Java', 'XML']
    },
    'blogify': {
      title: 'Blogify',
      tagline: 'A dynamic, server-side rendered blogging application.',
      heroImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overview: 'Blogify is a responsive blog publishing system utilizing EJS templates for server-rendered HTML. It implements secure user authentication, interactive markdown previewing, and MongoDB for database storage.',
      role: 'Backend & Frontend Developer',
      timeline: '10 Days',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/',
      problem: 'Building a fast and light dynamic content system without the heavy overhead of large client-side SPA frameworks, while still maintaining clean routing, user session state, and security.',
      solution: 'I utilized Express with session-based authentication, Mongoose for model representations, and EJS templates for fast-loading, highly SEO-friendly server-rendered pages.',
      features: [
        'User authentication with session store persistence',
        'Markdown-based post editor and parsing engine',
        'Dynamic routing for custom author posts',
        'Comment system and interactive community features',
      ],
      results: [
        'Achieved sub-150ms page response time with server rendering',
        'Secured session management cookies using strict HTTP-only options',
        'Simplified editing flow with real-time markdown parsing'
      ],
      stack: ['Node.js', 'Express.js', 'EJS', 'MongoDB']
    }
  };

  const project = caseStudies[id];

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-darkBg rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X size={24} />
        </button>

        {/* Hero Header */}
        <div className="relative h-[40vh] min-h-[300px] w-full bg-gray-900 overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto px-8 w-full pt-10">
            
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

        <div className="p-8 md:p-12 relative z-10">
          
          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-gray-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">My Role</h4>
              <p className="text-gray-900 dark:text-white font-medium">{project.role}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Timeline</h4>
              <p className="text-gray-900 dark:text-white font-medium">{project.timeline}</p>
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
      </motion.div>
    </div>
  );
}
