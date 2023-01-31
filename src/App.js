import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Video from './components/Video'
import LoadingScreen from './components/LoadingScreen'
import { motion } from "framer-motion";

function App() {

  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, [showLoading]);

  return (
    
    <div>
      {showLoading === true ? (
        <LoadingScreen />
      ) : (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
          <Navbar />
      <Hero />
      <About />
      <Video/>
      <Demo />
        <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
