"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Projects from './Projects';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './footer/Footer';



const Index = () => {
  return (
    <>
      <Head>
        <title>Muhammad Nauman - Portfolio</title>
        <meta name="description" content="Portfolio of Muhammad Nauman, a Full-Stack Software Engineer." />
      </Head>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
