import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Layout className="text-primary-500" size={32} />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and highly interactive user interfaces using React and Tailwind CSS.'
    },
    {
      icon: <Server className="text-primary-500" size={32} />,
      title: 'Backend Architecture',
      description: 'Designing robust APIs and scalable server-side applications with Node.js, Express, and modern databases.'
    },
    {
      icon: <Code className="text-primary-500" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, well-tested, and optimized code that is easy for other developers to understand.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software engineer with a strong focus on building scalable web applications. 
            I love combining modern design aesthetics with clean code to create engaging user experiences. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or writing on my blog.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkCard p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
