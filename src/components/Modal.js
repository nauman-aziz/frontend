"use client";

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-3xl animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative animate-slideIn text-black">
        <div
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          Close
        </div>
        <div className="relative h-64 w-full mb-4">
          <Image
            src={`data:image/jpeg;base64,${project.image}`}
            alt={project?.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#192d74] mb-2">{project?.title}</h3>
        <p className="text-gray-700">{project?.description}</p>
        <br />
        <ReactMarkdown >
         

          {project?.details}
          
        </ReactMarkdown>
      </div>
    </div>
    
  );
};

export default Modal;
