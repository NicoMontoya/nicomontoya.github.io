import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Globe from '../components/Globe'
import Stars from '../components/Stars'

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

const ControlsContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    gap: 0.5rem;
  }
`

const YearSelectorContainer = styled.div`
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
    padding: 0.6rem 1rem;
  }
`

const AllButton = styled.button`
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.3), 0 0 20px rgba(135, 206, 235, 0.2);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    animation: ${glow} 2s infinite;
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2));
  }
  
  ${props => props.$isActive && `
    background: linear-gradient(45deg, rgba(255, 105, 180, 0.3), rgba(135, 206, 235, 0.3));
    border-color: rgba(255, 255, 255, 0.3);
  `}
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
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

// ── Wedding celebration overlay ───────────────────────────────────────────────
const WeddingOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  cursor: pointer;
`

const ConfettiCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const WeddingCard = styled(motion.div)`
  position: relative;
  z-index: 1;
  background: rgba(10, 5, 20, 0.75);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 182, 210, 0.4);
  border-radius: 24px;
  padding: 2.5rem 3.5rem;
  text-align: center;
  box-shadow:
    0 0 40px rgba(255, 105, 180, 0.35),
    0 0 80px rgba(135, 206, 235, 0.2),
    0 20px 60px rgba(0, 0, 0, 0.5);
`

const WeddingRing = styled.div`
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
  line-height: 1;
`

const WeddingDate = styled.div`
  font-size: 1.1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff69b4, #87CEEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

const WeddingNames = styled.div`
  font-size: 1.65rem;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`

const WeddingDismiss = styled.div`
  margin-top: 1.25rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 2px;
  text-transform: uppercase;
`

// Canvas confetti — pure JS, no extra deps
function launchConfetti(canvas) {
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const COLORS = ['#ff69b4', '#87CEEB', '#fff', '#ffd700', '#b39ddb', '#80cbc4']
  const COUNT = 180

  const pieces = Array.from({ length: COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height * 0.5,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rot: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 3 + 2,
    vr: (Math.random() - 0.5) * 0.15,
    opacity: 1,
  }))

  let raf
  let startTime = null
  const DURATION = 4000

  function draw(ts) {
    if (!startTime) startTime = ts
    const elapsed = ts - startTime
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const fadeStart = DURATION * 0.6
    const globalAlpha = elapsed > fadeStart
      ? Math.max(0, 1 - (elapsed - fadeStart) / (DURATION - fadeStart))
      : 1

    pieces.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr
      p.vy += 0.04 // gravity

      ctx.save()
      ctx.globalAlpha = globalAlpha * p.opacity
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    })

    if (elapsed < DURATION) {
      raf = requestAnimationFrame(draw)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  raf = requestAnimationFrame(draw)
  return () => cancelAnimationFrame(raf)
}

function WeddingCelebration({ onDismiss }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const cancel = launchConfetti(canvasRef.current)
    const timer = setTimeout(onDismiss, 5000)
    return () => { cancel(); clearTimeout(timer) }
  }, [onDismiss])

  return (
    <WeddingOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onDismiss}
    >
      <ConfettiCanvas ref={canvasRef} />
      <WeddingCard
        initial={{ scale: 0.6, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      >
        <WeddingRing>💍</WeddingRing>
        <WeddingDate>3 · 27 · 2026</WeddingDate>
        <WeddingNames>Nico Montoya &amp; Nataly Yassan</WeddingNames>
        <WeddingDismiss>click anywhere to continue</WeddingDismiss>
      </WeddingCard>
    </WeddingOverlay>
  )
}

// Motion variants for the globe entrance - simple blur transition
const globeEntranceVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(20px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: "easeOut",
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
  const [isExiting, setIsExiting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showWedding, setShowWedding] = useState(false);
  const handleDismissWedding = useCallback(() => setShowWedding(false), []);

  // Auto-celebrate on page load during the wedding year
  useEffect(() => {
    if (currentYear === 2026) {
      const t = setTimeout(() => setShowWedding(true), 800);
      return () => clearTimeout(t);
    }
  }, []);
  
  // Generate years from current year down to 1993
  const years = [];
  for (let year = currentYear; year >= 1993; year--) {
    years.push(year);
  }
  
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
    setShowAll(false);
    if (year === 2026) setShowWedding(true);
  };
  
  const handleAllClick = () => {
    setShowAll(!showAll);
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
      <AnimatePresence>
        {showWedding && <WeddingCelebration onDismiss={handleDismissWedding} />}
      </AnimatePresence>
      <Stars />
      <motion.div
        variants={yearSelectorVariants}
        initial="initial"
        animate="animate"
      >
        <ControlsContainer>
          <AllButton 
            onClick={handleAllClick}
            $isActive={showAll}
          >
            All
          </AllButton>
          
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
        </ControlsContainer>
      </motion.div>
      
      <motion.div
        variants={globeEntranceVariants}
        initial="initial"
        animate="animate"
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Globe fullscreen={true} year={showAll ? 'all' : selectedYear} />
      </motion.div>
    </GlobeViewContainer>
  )
}

export default GlobeView
