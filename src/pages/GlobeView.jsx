import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Globe from '../components/Globe'
import Stars from '../components/Stars'
import WhirlwindTransition from '../components/WhirlwindTransition'

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const GlobeViewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
  50% { box-shadow: 0 0 15px rgba(255, 105, 180, 0.5), 0 0 30px rgba(135, 206, 235, 0.3); }
  100% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2); }
`

const BackButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${glow} 2s infinite;
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
  }
  
  &:before {
    content: '←';
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`

const YearSelectorContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${glow} 2s infinite;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    padding: 0.6rem 1rem;
  }
`

const YearDropdown = styled.select`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.3rem 2rem 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &:focus {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  option {
    background-color: rgba(26, 26, 26, 0.95);
    color: white;
    font-size: 1rem;
    padding: 10px;
  }
`

const YearLabel = styled.span`
  color: white;
  margin-right: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const DropdownArrow = styled.div`
  position: absolute;
  right: 1.2rem;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(255, 255, 255, 0.8);
  pointer-events: none;
  transition: transform 0.3s ease, border-top-color 0.3s ease;
  
  ${YearSelectorContainer}:hover & {
    transform: translateY(3px);
    border-top-color: white;
  }
`

// Custom styled component for the dropdown options container
const StyledYearOptions = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 20;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  width: 120px;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`

const YearOption = styled.div`
  padding: 0.7rem 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
    color: white;
  }
  
  ${props => props.$isSelected && `
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.3), rgba(135, 206, 235, 0.3));
    font-weight: bold;
  `}
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

const SelectedYear = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  min-width: 100px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${shake} 0.5s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

// Motion variants for the globe entrance - ultra-fast, seamless 3D preserved effect
const globeEntranceVariants = {
  initial: {
    scale: 0.01,
    opacity: 0,
    filter: 'blur(30px) brightness(0.5)',
  },
  animate: {
    scale: [0.01, 0.3, 0.6, 0.9, 1],
    opacity: [0, 0.3, 0.6, 0.8, 1],
    filter: ['blur(30px) brightness(0.5)', 'blur(20px) brightness(0.6)', 'blur(10px) brightness(0.7)', 'blur(5px) brightness(0.9)', 'blur(0px) brightness(1)'],
    transition: {
      times: [0, 0.2, 0.4, 0.7, 1],
      duration: 0.5, // Ultra-fast animation (under 3 seconds total)
      ease: [0.16, 1, 0.3, 1], // Custom easing for swirling effect
      delay: 0, // No delay for immediate response
    }
  }
};

// Motion variants for the year selector entrance - faster appearance
const yearSelectorVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5, // Ultra-fast appearance
    }
  }
};

// Motion variants for the back button entrance
const backButtonVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 1.5,
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    }
  },
  tap: {
    scale: 0.95,
  }
};

function GlobeView() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showEnteringParticles, setShowEnteringParticles] = useState(true);
  const [showExitingParticles, setShowExitingParticles] = useState(false);
  
  // Handle back button click with animation
  const handleBackClick = () => {
    setIsExiting(true);
    setShowExitingParticles(true);
    
    // Navigate after animation is halfway through
    setTimeout(() => {
      navigate('/');
    }, 600); // Match the cosmos.so style animation timing
  };
  
  // Handle transition animation completion
  const handleEnteringTransitionComplete = () => {
    setShowEnteringParticles(false);
  };
  
  const handleExitingTransitionComplete = () => {
    setShowExitingParticles(false);
  };
  
  // Set isFirstLoad to false after initial animation - ultra-fast
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 500); // Reduced to match animation duration
    
    return () => clearTimeout(timer);
  }, []);
  
  // Show entering particles on first load
  useEffect(() => {
    setShowEnteringParticles(true);
    
    // Don't automatically hide particles - they'll be hidden when animation completes
    // This ensures the particles are visible for their full animation cycle
  }, []);
  
  // Generate years from current year down to 1993
  const years = [];
  for (let year = currentYear; year >= 1993; year--) {
    years.push(year);
  }
  
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (isDropdownOpen && !e.target.closest('.year-selector')) {
      setIsDropdownOpen(false);
    }
  };
  
  // Add event listener for clicking outside
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  return (
    <GlobeViewContainer>
      <Stars />
      {/* Whirlwind transition effect for entering */}
      <WhirlwindTransition 
        isActive={showEnteringParticles} 
        isEntering={true} // true means particles go FROM globe TO screen
        onComplete={handleEnteringTransitionComplete}
      />
      {/* Whirlwind transition effect for exiting */}
      <WhirlwindTransition 
        isActive={showExitingParticles} 
        isEntering={false} // false means particles go FROM screen TO globe
        onComplete={handleExitingTransitionComplete}
      />
      {/* Back button removed as requested */}
      <motion.div
        variants={yearSelectorVariants}
        initial="initial"
        animate="animate"
      >
        <YearSelectorContainer className="year-selector">
        <YearLabel>Year</YearLabel>
        <div style={{ position: 'relative' }}>
          <SelectedYear onClick={toggleDropdown}>
            {selectedYear}
          </SelectedYear>
          <DropdownArrow />
          
          <StyledYearOptions $isOpen={isDropdownOpen}>
            {years.map(year => (
              <YearOption 
                key={year} 
                $isSelected={year === selectedYear}
                onClick={() => handleYearSelect(year)}
              >
                {year}
              </YearOption>
            ))}
          </StyledYearOptions>
        </div>
        </YearSelectorContainer>
      </motion.div>
      
      <motion.div
        variants={globeEntranceVariants}
        initial="initial"
        animate={isExiting ? "initial" : "animate"}
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          zIndex: 1, // Ensure it's above the background but below particles
        }}
      >
        {/* Subtle swirling effect that doesn't interfere with 3D appearance */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0,
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: isExiting ? 0 : [0, 0.3, 0.5, 0.3, 0],
            rotate: isExiting ? 0 : [0, 90, 180, 270, 360],
          }}
          transition={{ 
            times: [0, 0.2, 0.4, 0.7, 1],
            duration: 0.7, // Ultra-fast animation
            ease: "easeInOut"
          }}
        />
        {/* Subtle glow effect that enhances 3D appearance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isExiting ? 0 : [0, 0.3, 0.5, 0.7, 0.7],
            scale: isExiting ? 0.5 : [0.5, 0.8, 1.0, 1.1, 1.1],
          }}
          transition={{
            times: [0, 0.2, 0.4, 0.7, 1],
            duration: 0.6, // Ultra-fast animation
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(135,206,235,0.5) 0%, rgba(255,105,180,0.3) 50%, rgba(0,0,0,0) 70%)',
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />
        <Globe fullscreen={true} year={selectedYear} />
      </motion.div>
    </GlobeViewContainer>
  )
}

export default GlobeView
