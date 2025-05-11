import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import Skills from '../components/Home/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Home/Experience';
import Contact from '../components/Home/Contact';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ikhlas PV | AI Engineer & Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Ikhlas PV - AI Engineer and Full-Stack Developer specialized in Python frameworks and AI/ML solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}