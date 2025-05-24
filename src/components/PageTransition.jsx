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

// Whirlwind transition variants for globe
const whirlwindVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -180,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for a more dynamic feel
    },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    rotate: 180,
    filter: 'blur(10px)',
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

// Black hole effect specifically for globe transitions
const blackHoleVariants = {
  initial: {
    opacity: 0,
    scale: 0.01,
    rotate: 720,
    filter: 'blur(30px) brightness(0)',
    transformOrigin: 'center center',
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px) brightness(1)',
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 15,
      mass: 1.5,
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // Custom easing for dramatic expansion
    },
  },
  exit: {
    opacity: 0,
    scale: 0.01,
    rotate: -720,
    filter: 'blur(30px) brightness(0)',
    transition: {
      duration: 0.8,
      ease: [0.645, 0.045, 0.355, 1.000], // Cubic bezier for dramatic collapse
    },
  },
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  // Determine which variant to use based on the route
  const isGlobeRoute = location.pathname === '/globe';
  const isFromGlobe = location.key && location.key.includes('globe');
  
  let variants = standardVariants;
  
  // Use black hole effect for globe transitions
  if (isGlobeRoute || isFromGlobe) {
    variants = isGlobeRoute ? blackHoleVariants : whirlwindVariants;
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
