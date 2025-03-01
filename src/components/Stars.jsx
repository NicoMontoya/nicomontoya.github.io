import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const StarsCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
`;

const Stars = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create star particles
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    // Generate random star positions and colors
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      // Position stars in a sphere around the camera
      const radius = 3 + Math.random() * 7; // Stars between 3 and 10 units away
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Black stars with varying opacity
      const hue = 0;
      const saturation = 0;
      const lightness = 0.1 + Math.random() * 0.1; // Dark stars
      color.setHSL(hue, saturation, lightness);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Slowly rotate stars
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      // Subtle twinkle effect
      const time = Date.now() * 0.001;
      const colors = starGeometry.attributes.color;
      const positions = starGeometry.attributes.position;

      for (let i = 0; i < starCount; i++) {
        const idx = i * 3;
        const x = positions.array[idx];
        const y = positions.array[idx + 1];
        const z = positions.array[idx + 2];

        // Make stars twinkle based on their position and time
        const twinkle = Math.sin(time + x * 5 + y * 5 + z * 5) * 0.05 + 0.95;
        colors.array[idx] *= twinkle;
        colors.array[idx + 1] *= twinkle;
        colors.array[idx + 2] *= twinkle;
      }
      colors.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <StarsCanvas ref={containerRef} />;
};

export default Stars;
