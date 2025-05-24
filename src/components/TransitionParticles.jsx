import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ParticleContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999; /* Ensure it's above everything */
  overflow: visible; /* Allow particles to be visible outside container */
  background: transparent;
`;

// White overlay for the flash effect
const WhiteOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  pointer-events: none;
  z-index: 9998; /* Just below the particles */
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background: ${props => props.$color || 'rgba(0, 0, 0, 0.8)'};
  box-shadow: ${props => props.$glow ? `0 0 ${props.$size * 2}px ${props.$color}` : 'none'};
  opacity: 0;
  mix-blend-mode: ${props => props.$blend || 'normal'};
`;

// Function to get all text nodes in the document
const getTextNodesFromElement = (element) => {
  let textNodes = [];
  
  if (element.nodeType === Node.TEXT_NODE && element.textContent.trim() !== '') {
    textNodes.push(element);
    return textNodes;
  }
  
  const children = element.childNodes;
  for (let i = 0; i < children.length; i++) {
    textNodes = textNodes.concat(getTextNodesFromElement(children[i]));
  }
  
  return textNodes;
};

// Function to get all black elements (text, borders, etc.)
const getBlackElements = () => {
  const allElements = document.querySelectorAll('*');
  const blackElements = [];
  
  allElements.forEach(el => {
    try {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      const borderColor = style.borderColor;
      
      // Check if any of these properties are black or dark
      if (
        color.includes('rgb(0, 0, 0)') || 
        color.includes('rgb(34, 34, 34)') ||
        color.includes('rgb(51, 51, 51)') ||
        color.includes('rgb(68, 68, 68)') ||
        color.includes('rgb(85, 85, 85)') ||
        color.includes('rgb(102, 102, 102)') ||
        backgroundColor.includes('rgb(0, 0, 0)') ||
        backgroundColor.includes('rgba(0, 0, 0,') ||
        borderColor.includes('rgb(0, 0, 0)')
      ) {
        blackElements.push(el);
      }
    } catch (e) {
      // Skip elements that cause errors
    }
  });
  
  // Also get all SVG elements which might be black
  const svgElements = document.querySelectorAll('svg, path, rect, circle, line, polyline, polygon');
  svgElements.forEach(el => {
    try {
      const style = window.getComputedStyle(el);
      const fill = style.fill;
      const stroke = style.stroke;
      
      if (
        fill.includes('rgb(0, 0, 0)') ||
        fill.includes('#000') ||
        stroke.includes('rgb(0, 0, 0)') ||
        stroke.includes('#000')
      ) {
        blackElements.push(el);
      }
    } catch (e) {
      // Skip elements that cause errors
    }
  });
  
  return blackElements;
};

const TransitionParticles = ({ isActive, isEntering, onAnimationComplete }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const [showWhiteOverlay, setShowWhiteOverlay] = useState(false);
  const [whiteOverlayOpacity, setWhiteOverlayOpacity] = useState(0);
  
  // Generate random particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous particles
    particlesRef.current.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
    particlesRef.current = [];
    
    // Only create particles if the animation is active
    if (!isActive) return;
    
    const container = containerRef.current;
    // Base particle count
    let particleCount = 2000; // Dramatically increased for even more impact
    
    // Get text nodes and black elements to create particles from them
    const textNodes = getTextNodesFromElement(document.body);
    const blackElements = getBlackElements();
    
    // Add more particles for text and black elements
    particleCount += textNodes.length * 10; // 10 particles per text node
    particleCount += blackElements.length * 15; // 15 particles per black element
    
    // Create particles
    let particlesCreated = 0;
    
    // First, create particles from text nodes and black elements
    // This creates the effect of text and black elements swarming into the globe
    
    // Create particles from text nodes
    textNodes.forEach(textNode => {
      try {
        const range = document.createRange();
        range.selectNodeContents(textNode);
        const rect = range.getBoundingClientRect();
        
        if (rect.width === 0 || rect.height === 0) return;
        
        // Create multiple particles for each text node
        for (let j = 0; j < 10; j++) {
          if (particlesCreated >= particleCount) return;
          
          const size = Math.random() * 3 + 1;
          const opacity = 0.7 + Math.random() * 0.3;
          const color = `rgba(0, 0, 0, ${opacity})`;
          
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.borderRadius = '50%';
          particle.style.background = color;
          particle.style.boxShadow = `0 0 ${size}px ${color}`;
          particle.style.opacity = '0';
          
          // Position particle randomly within the text node
          const x = rect.left + Math.random() * rect.width;
          const y = rect.top + Math.random() * rect.height + window.scrollY;
          
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          
          container.appendChild(particle);
          particlesRef.current.push(particle);
          particlesCreated++;
        }
      } catch (e) {
        // Skip this text node if there's an error
      }
    });
    
    // Create particles from black elements
    blackElements.forEach(el => {
      try {
        const rect = el.getBoundingClientRect();
        
        if (rect.width === 0 || rect.height === 0) return;
        
        // Create multiple particles for each black element
        for (let j = 0; j < 15; j++) {
          if (particlesCreated >= particleCount) return;
          
          const size = Math.random() * 3 + 1;
          const opacity = 0.7 + Math.random() * 0.3;
          const color = `rgba(0, 0, 0, ${opacity})`;
          
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.borderRadius = '50%';
          particle.style.background = color;
          particle.style.boxShadow = `0 0 ${size}px ${color}`;
          particle.style.opacity = '0';
          
          // Position particle randomly within the element
          const x = rect.left + Math.random() * rect.width;
          const y = rect.top + Math.random() * rect.height + window.scrollY;
          
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          
          container.appendChild(particle);
          particlesRef.current.push(particle);
          particlesCreated++;
        }
      } catch (e) {
        // Skip this element if there's an error
      }
    });
    
    // Fill the rest with random particles
    for (let i = particlesCreated; i < particleCount; i++) {
      const size = Math.random() * 3 + 1; // Random size between 1-4px
      
      // Determine if this is a black dot or a colored particle
      const isBlackDot = Math.random() < 0.95; // 95% chance of being a black dot
      
      let color;
      if (isBlackDot) {
        // Black dots with varying opacity
        const opacity = 0.7 + Math.random() * 0.3; // 0.7-1.0 opacity
        color = `rgba(0, 0, 0, ${opacity})`;
      } else {
        // Colored particles (blue/pink) for accent
        const colorMix = Math.random();
        const r = Math.floor(135 + colorMix * 120); // 135-255 (blue to pink)
        const g = Math.floor(135 + (1-colorMix) * 70); // 135-205
        const b = Math.floor(180 + (1-colorMix) * 55); // 180-235
        color = `rgba(${r}, ${g}, ${b}, 0.8)`;
      }
      
      // Create particle element
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.background = color;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      particle.style.opacity = '0';
      
      // Get the actual position and dimensions of the globe
      // This ensures we're targeting the correct globe element on the page
      let globeRect;
      
      // Try to find the actual globe element
      const globeElement = document.querySelector('.globe-container') || 
                          document.querySelector('[data-globe]') ||
                          document.querySelector('.globe');
      
      if (globeElement) {
        // Use the actual globe element's position and dimensions
        const rect = globeElement.getBoundingClientRect();
        globeRect = {
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height
        };
      } else {
        // Fallback to approximate center if globe element not found
        globeRect = {
          left: window.innerWidth / 2 - 200,
          top: window.innerHeight / 2 - 200,
          width: 400,
          height: 400
        };
      }
      
      // Determine starting position based on whether we're entering or exiting
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // For particles that weren't created from text/elements
      if (i >= particlesCreated) {
        // REVERSED LOGIC: isEntering now means particles start FROM the globe
        if (isEntering) {
          // For entering (FROM globe TO screen): start from positions on and inside the globe
          // This creates the effect of particles emerging from within the globe
          
          // 80% start from the globe surface, 20% from inside
          const fromSurface = Math.random() < 0.8;
          const angle = Math.random() * Math.PI * 2;
          
          // Radius is either exactly the globe radius (surface) or smaller (inside)
          const radius = fromSurface ? 
            (globeRect.width / 2) : 
            (globeRect.width / 2) * Math.random() * 0.8;
          
          particle.style.left = `${centerX + Math.cos(angle) * radius}px`;
          particle.style.top = `${centerY + Math.sin(angle) * radius}px`;
        } else {
          // For exiting (FROM screen TO globe): start from all over the screen
          // This creates the effect of the entire page swarming into the globe
          
          // Distribute particles across the entire screen and beyond viewport
          let x, y;
          
          // 70% of particles start from the edges of the screen
          if (Math.random() < 0.7) {
            // Choose a random edge: 0=top, 1=right, 2=bottom, 3=left
            const edge = Math.floor(Math.random() * 4);
            
            switch (edge) {
              case 0: // top
                x = Math.random() * window.innerWidth;
                y = -50 + Math.random() * 50;
                break;
              case 1: // right
                x = window.innerWidth + Math.random() * 50;
                y = Math.random() * (window.innerHeight + document.body.scrollHeight);
                break;
              case 2: // bottom
                x = Math.random() * window.innerWidth;
                y = window.innerHeight + Math.random() * document.body.scrollHeight;
                break;
              case 3: // left
                x = -50 + Math.random() * 50;
                y = Math.random() * (window.innerHeight + document.body.scrollHeight);
                break;
            }
          } 
          // 30% of particles start from random positions on the screen
          else {
            x = Math.random() * window.innerWidth;
            y = Math.random() * (window.innerHeight + document.body.scrollHeight);
          }
          
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
        }
      }
      
      // Add to container
      container.appendChild(particle);
      particlesRef.current.push(particle);
      
      // Animate the particle - ultra-fast with no delay
      const delay = Math.random() * 0.02; // Almost no delay
      const duration = 0.2 + Math.random() * 0.1; // Ultra-fast duration 0.2-0.3s
      
      // Target position - either on/in the globe (entering) or all over the screen (exiting)
      let targetX, targetY;
      
      // REVERSED LOGIC: isEntering now means particles go FROM the globe TO the screen
      if (isEntering) {
        // For entering (now means FROM globe TO screen): target positions all over the screen
        // This creates the effect of particles emerging from the globe and dispersing
        
        // 70% go to edges, 30% to random screen positions
        if (Math.random() < 0.7) {
          // Choose a random edge to target
          const edge = Math.floor(Math.random() * 4);
          
          switch (edge) {
            case 0: // top
              targetX = Math.random() * window.innerWidth;
              targetY = -50;
              break;
            case 1: // right
              targetX = window.innerWidth + 50;
              targetY = Math.random() * (window.innerHeight + document.body.scrollHeight);
              break;
            case 2: // bottom
              targetX = Math.random() * window.innerWidth;
              targetY = window.innerHeight + document.body.scrollHeight;
              break;
            case 3: // left
              targetX = -50;
              targetY = Math.random() * (window.innerHeight + document.body.scrollHeight);
              break;
          }
        } else {
          targetX = Math.random() * window.innerWidth;
          targetY = Math.random() * (window.innerHeight + document.body.scrollHeight);
        }
      } else {
        // For exiting (now means FROM screen TO globe): target positions on the globe
        // This creates the effect of particles swarming back into the globe
        
        const angle = Math.random() * Math.PI * 2;
        
        // 70% on surface, 30% slightly inside for layered effect
        const penetrationFactor = Math.random() < 0.7 ? 1.0 : (0.7 + Math.random() * 0.3);
        const radius = (globeRect.width / 2) * penetrationFactor * Math.sqrt(Math.random());
        
        targetX = centerX + Math.cos(angle) * radius;
        targetY = centerY + Math.sin(angle) * radius;
      }
      
      // Create more dramatic swirling paths
      const startX = parseInt(particle.style.left);
      const startY = parseInt(particle.style.top);
      const dx = targetX - startX;
      const dy = targetY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate center-relative vectors for better swirling around the globe
      const toCenterX = centerX - startX;
      const toCenterY = centerY - startY;
      const toCenterDist = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY);
      
      // Normalize to-center vector
      const toCenterNormX = toCenterX / toCenterDist;
      const toCenterNormY = toCenterY / toCenterDist;
      
      // Perpendicular to center vector (for circular motion)
      const perpCenterX = -toCenterNormY;
      const perpCenterY = toCenterNormX;
      
      // Create more dramatic swirling for longer distances
      const swirlingFactor = Math.min(1, distance / 400) * 300;
      
      // Create control points that curve around the globe
      // First control point: move perpendicular to center direction
      const controlPoint1X = startX + dx * 0.25 + perpCenterX * swirlingFactor * (0.5 + Math.random() * 0.5);
      const controlPoint1Y = startY + dy * 0.25 + perpCenterY * swirlingFactor * (0.5 + Math.random() * 0.5);
      
      // Second control point: approach target from a different angle
      const controlPoint2X = startX + dx * 0.75 + perpCenterX * swirlingFactor * (Math.random() - 0.5);
      const controlPoint2Y = startY + dy * 0.75 + perpCenterY * swirlingFactor * (Math.random() - 0.5);
      
      // Apply animation with more keyframes for smoother motion
      setTimeout(() => {
        // No transition property - we'll use pure animation for better performance
        particle.style.opacity = '1';
        
        // More keyframes for smoother, more complex motion
        const keyframes = isEntering ? [
          // Entering keyframes - swarm towards the globe from all over
          { 
            opacity: 0,
            transform: 'translate(0, 0) rotate(0deg) scale(0.5)'
          },
          { 
            opacity: 0.5,
            transform: `translate(${(controlPoint1X - startX) * 0.3}px, ${(controlPoint1Y - startY) * 0.3}px) rotate(${Math.random() * 120}deg) scale(${0.7 + Math.random() * 0.3})`
          },
          { 
            opacity: 0.8,
            transform: `translate(${(controlPoint1X - startX) * 0.6}px, ${(controlPoint1Y - startY) * 0.6}px) rotate(${Math.random() * 240}deg) scale(${0.9 + Math.random() * 0.3})`
          },
          { 
            opacity: 1,
            transform: `translate(${controlPoint1X - startX}px, ${controlPoint1Y - startY}px) rotate(${Math.random() * 360}deg) scale(${1 + Math.random() * 0.4})`
          },
          { 
            opacity: 1,
            transform: `translate(${(controlPoint1X - startX) * 1.2}px, ${(controlPoint1Y - startY) * 1.2}px) rotate(${Math.random() * 450}deg) scale(${1 + Math.random() * 0.3})`
          },
          { 
            opacity: 1,
            transform: `translate(${controlPoint2X - startX}px, ${controlPoint2Y - startY}px) rotate(${Math.random() * 540}deg) scale(${1 + Math.random() * 0.2})`
          },
          { 
            opacity: isBlackDot ? 1 : 0.7, // Black dots remain more visible
            transform: `translate(${(targetX - startX)}px, ${(targetY - startY)}px) rotate(${Math.random() * 720}deg) scale(${isBlackDot ? 0.8 : 0.5})`
          }
        ] : [
          // Exiting keyframes - emerge from the globe and swarm everywhere
          { 
            opacity: 0,
            transform: 'translate(0, 0) rotate(0deg) scale(0.5)'
          },
          { 
            opacity: 0.4,
            transform: `translate(${(controlPoint1X - startX) * 0.15}px, ${(controlPoint1Y - startY) * 0.15}px) rotate(${Math.random() * 120}deg) scale(${0.6 + Math.random() * 0.2})`
          },
          { 
            opacity: 0.7,
            transform: `translate(${(controlPoint1X - startX) * 0.3}px, ${(controlPoint1Y - startY) * 0.3}px) rotate(${Math.random() * 240}deg) scale(${0.7 + Math.random() * 0.2})`
          },
          { 
            opacity: 0.9,
            transform: `translate(${(controlPoint1X - startX) * 0.5}px, ${(controlPoint1Y - startY) * 0.5}px) rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.2})`
          },
          { 
            opacity: 1,
            transform: `translate(${(controlPoint1X - startX) * 0.7}px, ${(controlPoint1Y - startY) * 0.7}px) rotate(${Math.random() * 450}deg) scale(${0.9 + Math.random() * 0.2})`
          },
          { 
            opacity: 1,
            transform: `translate(${(controlPoint2X - startX)}px, ${(controlPoint2Y - startY)}px) rotate(${Math.random() * 540}deg) scale(${0.9 + Math.random() * 0.2})`
          },
          { 
            opacity: 0,
            transform: `translate(${(targetX - startX)}px, ${(targetY - startY)}px) rotate(${Math.random() * 720}deg) scale(0)`
          }
        ];
        
        const animation = particle.animate(keyframes, {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          fill: 'forwards'
        });
        
        // Clean up when all animations complete
        if (i === particleCount - 1) {
          animation.onfinish = () => {
            // If we're exiting (going to the globe view), show white flash at the end
            if (isEntering) {
              setShowWhiteOverlay(true);
              // Animate white overlay opacity
              let startTime = Date.now();
              const flashDuration = 150; // 150ms flash (ultra-fast)
              
              const animateFlash = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / flashDuration, 1);
                
                // Flash in and out
                let opacity;
                if (progress < 0.5) {
                  // Flash in (0 to 0.7)
                  opacity = progress * 2 * 0.7;
                } else {
                  // Flash out (0.7 to 0)
                  opacity = (1 - (progress - 0.5) * 2) * 0.7;
                }
                
                setWhiteOverlayOpacity(opacity);
                
                if (progress < 1) {
                  requestAnimationFrame(animateFlash);
                } else {
                  setShowWhiteOverlay(false);
                  if (onAnimationComplete) {
                    onAnimationComplete();
                  }
                }
              };
              
              requestAnimationFrame(animateFlash);
            } else {
              if (onAnimationComplete) {
                onAnimationComplete();
              }
            }
          };
        }
      }, delay * 1000);
    }
    
    // Clean up function
    return () => {
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [isActive, isEntering, onAnimationComplete]);
  
  return (
    <>
      {showWhiteOverlay && (
        <WhiteOverlay 
          style={{ opacity: whiteOverlayOpacity }}
        />
      )}
      <ParticleContainer 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default TransitionParticles;
