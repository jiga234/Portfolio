import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ isLoading, onComplete }) {
  useEffect(() => {
    if (isLoading) {
      // Prevent scrolling while loading
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        onComplete();
        document.body.style.overflow = 'auto';
      }, 2500); // Loader duration: 2.5 seconds
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-darkBg"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="overflow-hidden mb-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500 uppercase"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              Jigar Prajapati
            </motion.h1>
          </div>
          <motion.div 
            className="h-1 w-48 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
