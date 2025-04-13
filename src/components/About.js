"use client";

import React, { useState, useEffect,  } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// API_BASE_URL is set from the environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const About = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [aboutDescription, setAboutDescription] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/getProfilePicture`)
      .then((res) => res.json())
      .then((data) => {
         // data.image is the base64 string
         setProfilePicture(`data:image/jpeg;base64,${data.image}`);
      })
      .catch((error) => {
        console.error('Error fetching profile picture:', error);
      });
  }, []);

  
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/getAboutDescription`)
    .then((res) => res.json())
    .then((data) => {
      setAboutDescription(data.description);
    })
    .catch((error) => {
      console.error('Error fetching about description:', error);
    });
  }, []);

  // Container variant for staggering text animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Text item variant for sliding in from left
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  // Image variant for scaling in
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-[#192d74] mb-4"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
           {aboutDescription || 'Loading description...'}
          </motion.p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-80 h-80">
            {profilePicture ? (
              <Image
                src={profilePicture }
                alt="Muhammad Nauman"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full animate-pulse">
                Loading...
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
