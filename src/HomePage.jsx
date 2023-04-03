import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const HomePage = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Header />
      <Skills />
    </div>
  )
}

export default HomePage;
