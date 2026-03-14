import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative text-white selection:bg-neutral-800 selection:text-white font-sans antialiased">
      <Background />
      <div className="relative z-10">
        <Navbar onOpenContact={() => setIsModalOpen(true)} />
        <main>
          <Hero onOpenContact={() => setIsModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Blogs />
          <Contact onOpenContact={() => setIsModalOpen(true)} />
        </main>
        <Footer />
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
