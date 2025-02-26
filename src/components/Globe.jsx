import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const GlobeCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, rgba(245, 245, 245, 0.8), rgba(229, 229, 229, 0.8));
`;

const Globe = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-texture.jpg');
    earthTexture.encoding = THREE.sRGBEncoding;

    // Globe setup
    const geometry = new THREE.SphereGeometry(0.8, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      map: earthTexture,
      metalness: 0.0,
      roughness: 0.5,
      clearcoat: 0.1,
      clearcoatRoughness: 0.1,
      emissive: new THREE.Color(0x112244),
      emissiveIntensity: 0.05,
    });
    const sphere = new THREE.Mesh(geometry, material);
    
    // Set initial rotation to show more land masses
    sphere.rotation.y = Math.PI;
    scene.add(sphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1.5, 1, 1);
    
    const pointLight1 = new THREE.PointLight(0xffffff, 0.5, 8);
    pointLight1.position.set(-2, 1, 2);
    
    const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 8);
    pointLight2.position.set(2, -1, 2);
    
    scene.add(ambientLight, directionalLight, pointLight1, pointLight2);

    // Animation
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      targetRotationY = ((event.clientX / window.innerWidth) * 2 - 1) * 0.3;
      targetRotationX = (-(event.clientY / window.innerHeight) * 2 + 1) * 0.2;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.y += (targetRotationY - sphere.rotation.y) * 0.03;
      sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.03;
      
      // Pulse lights
      const time = Date.now() * 0.001;
      pointLight1.intensity = 0.5 + Math.sin(time * 2) * 0.1;
      pointLight2.intensity = 0.5 + Math.cos(time * 2) * 0.1;

      // Auto-rotation when not interacting
      if (Math.abs(targetRotationY) < 0.1 && Math.abs(targetRotationX) < 0.1) {
        sphere.rotation.y += 0.001;
      }
      
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <GlobeCanvas ref={containerRef} />;
};

export default Globe;
