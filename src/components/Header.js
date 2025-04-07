"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={` fixed w-full z-50 transition-all duration-300 scroll-smooth`}
      style={{
        background: 'linear-gradient(110deg, #5d0749 0%, #192d74 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#home" className="text-2xl font-bold underline text-white">
            Muhammad Nauman
          </Link>
        </motion.div>
        <motion.nav>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex space-x-8 text-lg"
          >
            <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
              <a href="#home" className="text-white hover:text-[#192d74]">
                Home
              </a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
              <a href="#about" className="text-white hover:text-[#192d74]">
                About
              </a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
              <a href="#projects" className="text-white hover:text-[#192d74]">
                Projects
              </a>
            </motion.li>
            <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
              <a href="#contact" className="text-white hover:text-[#192d74]">
                Contact
              </a>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
