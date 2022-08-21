import React from 'react';
import Navbar from '../components/Navbar';
import Scroll from '../components/Scroll';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Footer from '../pages/Footer';
import Home from '../pages/Home';
import Testimonials from '../pages/Testimonials';
import Why from '../pages/Why';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="show">
      <Scroll />
      <Navbar />
      <Home />
      <About />
      <Why />
      <Testimonials />
      <Blog />
      <Footer />
    </motion.div>
  );
};

export default App;
