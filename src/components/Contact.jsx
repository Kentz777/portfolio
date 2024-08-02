import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResponsiveMotionDiv = ({ children }) => {
  // State to hold the viewport configuration
  const [viewportConfig, setViewportConfig] = useState({ once: false, amount: 0.2 });

  // Effect to update viewport configuration based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Example breakpoint for mobile
        setViewportConfig({ once: false, amount: 0.2 });
      } else { // Default or desktop viewport configuration
        setViewportConfig({ once: false, amount: 0.8 });
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      viewport={viewportConfig}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <ResponsiveMotionDiv>
      <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='https://getform.io/f/pbmqopxb' method='POST' encType='multipart/form-data'>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Name</label>
              <input className='border-2 rounded-lg p-3 border-gray-300' type="text" name="name" placeholder="Your name..." required />
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Phone Number</label>
              <input className='border-2 rounded-lg p-3 border-gray-300' type="text" name="phone" placeholder="+00" required />
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 border-gray-300' type="email" name="email" placeholder="Your email..." required />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" placeholder="Is about?..." required />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" name="message" placeholder="Message me here..." required></textarea>
          </div>
          <button className='bg-[#001b5e] text-gray-100 w-full p-4 rounded-lg'>
            Send Message
          </button>
        </form>
      </div>
    </ResponsiveMotionDiv>
  );
};

export default Contact;
