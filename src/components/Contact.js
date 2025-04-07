"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Container variant to stagger child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item variant for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20  text-white"
    style={{
      background: 'linear-gradient(110deg, #5d0749 0%, #192d74 100%)'
    }}>
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg mb-4"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just a friendly hello!
        </motion.p>
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.p className="text-lg" variants={itemVariants}>
            Email:{' '}
            <motion.a
              href="mailto:m.nauman.aziz.1122@gmail.com"
              className=" underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              m.nauman.aziz.1122@gmail.com
            </motion.a>
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            Phone: +92 3104560430
          </motion.p>
          <motion.p className="text-lg" variants={itemVariants}>
            LinkedIn:{' '}
            <motion.a
              href="https://www.linkedin.com/in/muhammad-nauman-57b6801ab/"
              target="_blank"
              rel="noopener noreferrer"
              className=" underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Muhammad Nauman
            </motion.a>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
