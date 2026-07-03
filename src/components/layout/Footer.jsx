import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-darkCard py-12 mt-20 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white mb-2">
              Jigar <span className="text-primary-500">Prajapati</span>
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left max-w-xs">
              Building digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jigar-prajapati-41795b370?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Jigar Prajapati. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
