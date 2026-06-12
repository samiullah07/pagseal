import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/common/Footer';
import CookieModal from './components/CookieModal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieModal />
    </div>
  );
}

export default App;
