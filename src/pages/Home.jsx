import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Globe from '../components/Globe'
import Stars from '../components/Stars'
import WhirlwindTransition from '../components/WhirlwindTransition'

const HomeContainer = styled.div`
  background: transparent;
  min-height: 200vh;
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Header = styled.div`
  text-align: center;
  padding-top: 8rem;
  margin-bottom: 16rem;
`

const GlobeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20rem 0;
`

const GlobeContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const GlobeLink = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #333333;
  text-shadow: none;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #444444;
  text-shadow: none;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const IntroText = styled(motion.p)`
  font-size: 1.2rem;
  color: #444444;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  text-align: center;
`

function Home() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  
  // Handle globe click with animation
  const handleGlobeClick = () => {
    setIsAnimating(true);
    setShowParticles(true);
    
    // Navigate after animation is halfway through
    setTimeout(() => {
      navigate('/globe');
    }, 600); // Match the cosmos.so style animation timing
  };
  
  // Handle transition animation completion
  const handleTransitionComplete = () => {
    setShowParticles(false);
  };
  
  return (
    <HomeContainer>
      <Stars />
      {/* Whirlwind transition effect */}
      <WhirlwindTransition 
        isActive={showParticles} 
        isEntering={false} // false means particles go FROM screen TO globe
        onComplete={handleTransitionComplete}
      />
      <Header>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curious Wanderer
        </Subtitle>
        <IntroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Welcome...

        
        </IntroText>
      </Header>
      <GlobeSection>
        <GlobeContainer>
          {/* Globe container */}
          <Globe />
          
          {/* Black hole effect overlay - only appears during animation */}
          {isAnimating && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 5,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              animate={{
                scale: [1, 0.8, 0.5, 0.2, 0.01],
                opacity: [1, 1, 0.9, 0.6, 0],
              }}
              transition={{
                duration: 0.3, // Ultra-fast animation
                ease: [0.645, 0.045, 0.355, 1.000],
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >
              {/* Dark overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
          <GlobeLink 
            onClick={handleGlobeClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View fullscreen globe"
          />
        </GlobeContainer>
      </GlobeSection>
    </HomeContainer>
  )
}

export default Home
