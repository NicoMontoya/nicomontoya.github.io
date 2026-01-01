import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Standard transition variants
const standardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Simple blur transition for globe - blur to black, then blur in
const globeVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(20px)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(20px)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  // Determine which variant to use based on the route
  const isGlobeRoute = location.pathname === '/globe';
  
  let variants = standardVariants;
  
  // Use simple blur transition for globe
  if (isGlobeRoute) {
    variants = globeVariants;
  }
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        style={{ 
          width: '100%', 
          height: '100%',
          position: isGlobeRoute ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
