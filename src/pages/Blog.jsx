import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Building Modern React Applications in 2024',
      excerpt: 'Exploring the latest patterns and tools for creating scalable, high-performance web applications using React, Vite, and modern state management.',
      date: 'Oct 24, 2023',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS Animations',
      excerpt: 'A deep dive into creating fluid, eye-catching animations using only utility classes in Tailwind CSS without writing custom CSS.',
      date: 'Nov 12, 2023',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'My thoughts on where the industry is heading, the role of AI in coding, and how to stay relevant as a software engineer.',
      date: 'Dec 05, 2023',
      readTime: '6 min read',
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-darkCard">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Blog</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Thoughts, learnings, and tutorials on web development.
        </p>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkCard p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 hover:text-primary-500 transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
              <div className="mt-4">
                <button className="text-primary-500 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Read more →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
