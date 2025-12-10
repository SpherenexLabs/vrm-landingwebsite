import React, { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoShowcase from './components/VideoShowcase';
import Services from './components/Services';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Recognition from './components/Recognition';
import WhyChooseUs from './components/WhyChooseUs';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashFinish} />;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <VideoShowcase />
      <Services />
      <Projects />
      <Awards />
      <Recognition />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
