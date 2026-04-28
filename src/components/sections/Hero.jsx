import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>


          <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 leading-tight"
            >
              {/* <span className="block text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-2 pb-1 pl-6">
                Hi, I'm
              </span> */}

               <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6 pl-1"
                >
                  Hi, I'm
              </motion.h3>

              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500 pb-2 pl-1">
                Jigar Prajapati
              </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6 pl-2"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            I build exceptional and accessible digital experiences for the web. Let's turn your ideas into reality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a 
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
            >
              Download Resume <Download size={20} />
            </a>
          </motion.div>
        </div>

        {/* Photo Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-[2rem] md:rounded-[3rem] rotate-6 opacity-30 dark:opacity-20 blur-lg transition-transform duration-500 hover:rotate-12"></div>
            <img 
              src="public/jigar.png" 
              alt="Jigar Prajapati" 
              className="relative w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] border-2 border-white/20 dark:border-white/10 shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
