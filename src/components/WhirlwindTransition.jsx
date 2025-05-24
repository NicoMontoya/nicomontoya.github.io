import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: visible;
  background: transparent;
`;

const LiquidCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
`;

const WhiteFlash = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  pointer-events: none;
  z-index: 9998;
`;

const WhirlwindTransition = ({ isActive, isEntering, onComplete, targetElement }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const whiteFlashRef = useRef(null);
  const animationFrameRef = useRef(null);
  const metaballsRef = useRef([]);
  
  useEffect(() => {
    if (!isActive) return;
    
    // Create canvas for liquid effect if it doesn't exist
    if (!canvasRef.current) {
      const canvas = document.createElement('canvas');
      canvas.className = 'liquid-transition-canvas';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Find the target globe element
    let targetRect;
    let targetElement = document.querySelector('.globe-container') || 
                        document.querySelector('[data-globe]');
    
    if (targetElement) {
      targetRect = targetElement.getBoundingClientRect();
    } else {
      // Fallback to center of screen
      targetRect = {
        left: window.innerWidth / 2 - 150,
        top: window.innerHeight / 2 - 150,
        width: 300,
        height: 300
      };
    }
    
    const centerX = targetRect.left + targetRect.width / 2;
    const centerY = targetRect.top + targetRect.height / 2;
    const radius = Math.max(targetRect.width, targetRect.height) / 2;
    
    // Create metaballs for liquid effect - always centered around the globe
    const metaballCount = 20; // Number of metaballs
    metaballsRef.current = [];
    
    // Create a circular arrangement of metaballs around the globe
    for (let i = 0; i < metaballCount; i++) {
      // Position metaballs in a circle around the globe
      const angle = (i / metaballCount) * Math.PI * 2;
      const distance = radius * 1.2; // Slightly outside the globe
      
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      // Size based on position in the circle
      const size = 40 + Math.sin(angle * 2) * 20;
      
      // No initial velocity - will be calculated during animation
      const vx = 0;
      const vy = 0;
      
      metaballsRef.current.push({
        x,
        y,
        vx,
        vy,
        size,
        originalSize: size,
        color: 'rgba(0, 0, 0, 0.8)'
      });
    }
    
    // Animation variables
    let startTime = null;
    const duration = 1200; // 1.2 seconds for the entire animation
    
    // Render function for cosmos.so style metaballs
    const renderMetaballs = (ctx, metaballs) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a mask for the globe area
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fill();
      
      // Draw each metaball with gradient
      metaballs.forEach(ball => {
        const gradient = ctx.createRadialGradient(
          ball.x, ball.y, 0,
          ball.x, ball.y, ball.size
        );
        
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Draw the globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Animation function - cosmos.so style
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Update metaballs in a cosmos.so style
      metaballsRef.current.forEach((ball, index) => {
        // Calculate the target angle for this frame
        const baseAngle = (index / metaballCount) * Math.PI * 2;
        const rotationSpeed = isEntering ? -2 : 2; // Rotate in different directions
        const currentAngle = baseAngle + progress * Math.PI * rotationSpeed;
        
        // Calculate distance from center based on progress
        let distance;
        if (isEntering) {
          // For entering: start at the globe radius and expand outward
          distance = radius * (1 + progress * 3);
        } else {
          // For exiting: start outside and contract inward
          distance = radius * (4 - progress * 3);
        }
        
        // Calculate new position
        ball.x = centerX + Math.cos(currentAngle) * distance;
        ball.y = centerY + Math.sin(currentAngle) * distance;
        
        // Calculate size based on progress and position
        const baseSizeFactor = isEntering ? (1 - progress) : progress;
        const sizePulseFactor = 0.7 + Math.sin(currentAngle * 3 + progress * 10) * 0.3;
        ball.size = ball.originalSize * baseSizeFactor * sizePulseFactor;
        
        // Add some randomness to make it more organic
        ball.x += Math.sin(progress * 10 + index) * 10;
        ball.y += Math.cos(progress * 10 + index) * 10;
      });
      
      // Render metaballs
      renderMetaballs(ctx, metaballsRef.current);
      
      // Flash effect at the end
      if (progress > 0.8) {
        const flashProgress = (progress - 0.8) / 0.2; // 0 to 1 in the last 20% of animation
        
        if (!whiteFlashRef.current) {
          whiteFlashRef.current = document.createElement('div');
          whiteFlashRef.current.style.position = 'fixed';
          whiteFlashRef.current.style.top = '0';
          whiteFlashRef.current.style.left = '0';
          whiteFlashRef.current.style.width = '100vw';
          whiteFlashRef.current.style.height = '100vh';
          whiteFlashRef.current.style.background = 'white';
          whiteFlashRef.current.style.zIndex = '9998';
          whiteFlashRef.current.style.pointerEvents = 'none';
          document.body.appendChild(whiteFlashRef.current);
        }
        
        // Flash in and out
        const opacity = flashProgress < 0.5 ? 
                       flashProgress * 2 : // 0 to 1 in first half
                       (1 - (flashProgress - 0.5) * 2); // 1 to 0 in second half
        
        whiteFlashRef.current.style.opacity = opacity.toString();
      }
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        if (canvasRef.current) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        
        if (whiteFlashRef.current) {
          whiteFlashRef.current.remove();
          whiteFlashRef.current = null;
        }
        
        if (onComplete) onComplete();
      }
    };
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      
      if (whiteFlashRef.current) {
        whiteFlashRef.current.remove();
        whiteFlashRef.current = null;
      }
    };
  }, [isActive, isEntering, onComplete]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
        canvasRef.current = null;
      }
      
      if (whiteFlashRef.current) {
        whiteFlashRef.current.remove();
        whiteFlashRef.current = null;
      }
    };
  }, []);
  
  return <TransitionContainer ref={containerRef} />;
};

export default WhirlwindTransition;
