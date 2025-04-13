"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import { motion } from 'framer-motion';
// API_BASE_URL is set from the environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // fetch('https://my-portfolio-backend-ten.vercel.app/api/projects')
    fetch(`${API_BASE_URL}/api/projects`)

      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  // Container variant for staggering project cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card variants for entrance animation
  const cardVariants = {
    hidden: { opacity: 0.5, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <p className="text-center text-lg animate-pulse">Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-[#192d74] mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-4 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            >

            <motion.div
              key={project.id}
              className="flex  h-full flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row cursor-pointer p-5"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              // onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-96 w-full md:h-auto md:w-48 p-10">
                <Image
                  src={`data:image/jpeg;base64,${project.image}`}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg object-cover md:!rounded-none md:!rounded-s-lg"
                />
              </div>
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">{project.title}</h5>
                <p className="mb-4 text-[#192d74]">
                  {project.description.substring(0, 100)}...
                </p>
                <p className="text-xs text-surface/75 dark:text-neutral-300">
                  Last updated 3 mins ago
                </p>
              </div>
            </motion.div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center">
            <div className="w-64 h-64 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-gray-700 text-lg">Project Image loading ...</span>
            </div>
            <h3 className="text-2xl font-bold text-[#192d74] mt-4">
              Title Loading ...
            </h3>
            <p className="text-lg text-gray-600 mt-2 text-center max-w-sm">
              description loading ...
            </p>
          </div>
        )}

      </motion.div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
