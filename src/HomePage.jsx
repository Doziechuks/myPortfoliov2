import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';

const HomePage = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Header />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;
