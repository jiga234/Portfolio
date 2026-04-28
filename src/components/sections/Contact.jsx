import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Provide your Web3Forms Access Key here
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-500 rounded-3xl p-8 md:p-12 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-100">Email</h4>
                  <p>hello@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-100">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-100">Location</h4>
                  <p>San Francisco, CA<br />Available for remote work worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-primary-400/30">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary-200 transition-colors">
                  <FaGithub size={24} /> <span className="font-medium">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary-200 transition-colors ml-4">
                  <FaLinkedin size={24} /> <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-primary-400">
              <p className="text-primary-100 italic">
                "I'm always open to discussing product design work or partnership opportunities."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-darkCard rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-800"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="Jigar Prajapati"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-900"
              >
                Send Message <Send size={20} />
              </button>
              
              <span className="block text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                {result}
              </span>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
