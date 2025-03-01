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
  background: black;
`;

const Globe = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/bathymetryEarth.jpg', (texture) => {
      texture.encoding = THREE.sRGBEncoding;
      material.needsUpdate = true;
    });

    // Globe setup
    const geometry = new THREE.SphereGeometry(0.8, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.5,
      metalness: 0.1,
      emissive: new THREE.Color(0x006994),
      emissiveIntensity: 0.2,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.rotation.y = Math.PI;
    scene.add(sphere);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x0077be, 1.0, 10);
    pointLight1.position.set(-2, 1, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 1.0, 10);
    pointLight2.position.set(2, -1, 2);
    scene.add(pointLight2);

    // Helper function to convert spherical to cartesian coordinates
    function sphericalToCartesian(radius, theta, phi) {
      return new THREE.Vector3(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      );
    }

    // Helper function to calculate enhanced arc position
    function calculateArcPosition(startPos, endPos, progress, arcHeight) {
      const pos = new THREE.Vector3().lerpVectors(startPos, endPos, progress);
      const up = pos.clone().normalize();
      // Enhanced arc curve using a modified sine wave
      const arcProgress = Math.sin(progress * Math.PI) * (1 - Math.abs(progress - 0.5));
      return pos.add(up.multiplyScalar(arcHeight * arcProgress * 2)); // Doubled the effect
    }

    // Traveling lights setup
    const travelingLights = [];
    const maxLights = 40; // Reduced number of lights for better visibility
    const baseRadius = 0.82;
    const maxArcHeight = 0.8; // Increased maximum arc height
    const trailLength = 35; // Increased trail length
    
    // Create glow sprite texture
    const glowTexture = new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAMFJREFUGBl1QdFRQjEUPCc5PmhBWgA7ECsQK4AOhA6EDqQEqECtQK1ArUCswOH2zRwZhhs+7uXt7d6FTlgRYVXUIK7cDgHdUFXRu0RAeejrb1ZQYyKibqrqXVFBRNx1EUGNb/Rm8rW2PjZ9Q/WnrKpkDIGIUt9FxFPVd5A5KaW6uwewPQG6qWqEQQI2wdOY0VNVn6eUvmb3BWyTWQJ2BFBzNxGZqOqtuwfmXFU9xhgfZgGM44hsL2Y27v4MICKyA/bW2i/HE8N9CKfmuwAAAABJRU5ErkJggg==');
    
    // Create sprite materials
    const spriteMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const trailMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    function createTravelingLight() {
      const startPhi = Math.random() * Math.PI * 2;
      const startTheta = Math.random() * Math.PI;
      const endPhi = Math.random() * Math.PI * 2;
      const endTheta = Math.random() * Math.PI;

      const startPos = sphericalToCartesian(baseRadius, startTheta, startPhi);
      const endPos = sphericalToCartesian(baseRadius, endTheta, endPhi);

      const light = new THREE.Sprite(spriteMaterial.clone());
      light.scale.set(0.06, 0.06, 1); // Increased size
      
      const hue = 0.15 + Math.random() * 0.05;
      const saturation = 0.3;
      const lightness = 0.9; // Increased brightness
      light.material.color.setHSL(hue, saturation, lightness);
      
      const pointLight = new THREE.PointLight(0xffffcc, 0.6, 0.4); // Increased intensity and range
      
      // Calculate arc height based on distance
      const distance = startPos.distanceTo(endPos);
      const arcHeight = maxArcHeight * (distance / (2 * baseRadius));
      
      // Create trail
      const trail = [];
      for (let i = 0; i < trailLength; i++) {
        const trailDot = new THREE.Sprite(trailMaterial.clone());
        trailDot.material.color.setHSL(hue, saturation, lightness);
        trailDot.scale.set(0.03, 0.03, 1); // Increased trail dot size
        scene.add(trailDot);
        trail.push(trailDot);
      }
      
      light.userData = {
        startPos: startPos.clone(),
        endPos: endPos.clone(),
        progress: 0,
        speed: 0.001 + Math.random() * 0.002, // Slower movement
        baseScale: 0.06,
        pointLight,
        arcHeight,
        trail,
        trailPositions: [],
      };

      light.position.copy(startPos);
      pointLight.position.copy(startPos);

      scene.add(light);
      scene.add(pointLight);
      travelingLights.push(light);
    }

    // Initial lights
    for (let i = 0; i < maxLights / 2; i++) {
      createTravelingLight();
    }

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
      
      const time = Date.now() * 0.001;
      pointLight1.intensity = 1.0 + Math.sin(time * 1.2) * 0.2;
      pointLight2.intensity = 1.0 + Math.cos(time * 1.5) * 0.2;

      // Update traveling lights
      for (let i = travelingLights.length - 1; i >= 0; i--) {
        const light = travelingLights[i];
        const { startPos, endPos, speed, baseScale, pointLight, arcHeight, trail, trailPositions } = light.userData;
        
        light.userData.progress += speed;

        if (light.userData.progress >= 1) {
          scene.remove(light);
          scene.remove(pointLight);
          trail.forEach(dot => scene.remove(dot));
          travelingLights.splice(i, 1);
          if (travelingLights.length < maxLights) {
            createTravelingLight();
          }
          continue;
        }

        // Calculate current position
        const progress = light.userData.progress;
        const currentPos = calculateArcPosition(startPos, endPos, progress, arcHeight);
        light.position.copy(currentPos);

        // Update trail positions
        trailPositions.unshift(currentPos.clone());
        if (trailPositions.length > trailLength) {
          trailPositions.pop();
        }

        // Update trail dots with enhanced visibility
        trail.forEach((dot, index) => {
          if (index < trailPositions.length) {
            dot.position.copy(trailPositions[index]);
            const opacity = Math.pow(1 - (index / trailLength), 1.5); // More gradual fade
            dot.material.opacity = opacity * 0.7; // Increased base opacity
            dot.scale.setScalar(0.03 * opacity);
          }
        });

        // Enhanced pulsing glow effect
        const pulseScale = baseScale * (1 + Math.sin(time * 8 + i) * 0.3);
        light.scale.set(pulseScale, pulseScale, 1);

        // Update point light
        pointLight.position.copy(currentPos);
        pointLight.intensity = 0.6 + Math.sin(time * 8 + i) * 0.3;

        // Fade out near the end
        if (progress > 0.9) { // Later fade out
          const fade = (1 - progress) * 10;
          light.material.opacity = fade;
          pointLight.intensity *= fade;
          trail.forEach(dot => {
            dot.material.opacity *= fade;
          });
        }

        // Rotate with globe
        const rotation = new THREE.Euler(sphere.rotation.x, sphere.rotation.y, 0);
        light.position.applyEuler(rotation);
        pointLight.position.copy(light.position);
        trail.forEach(dot => {
          dot.position.applyEuler(rotation);
        });
      }

      // Randomly add new lights
      if (travelingLights.length < maxLights && Math.random() < 0.03) { // Reduced spawn rate
        createTravelingLight();
      }

      // Auto-rotation
      const autoRotationSpeed = 0.001;
      const mouseInfluence = Math.max(0, 1 - (Math.abs(targetRotationY) + Math.abs(targetRotationX)));
      sphere.rotation.y += autoRotationSpeed * mouseInfluence;
      
      // Wobble
      sphere.rotation.x += Math.sin(time * 0.5) * 0.0005;
      
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
      spriteMaterial.dispose();
      trailMaterial.dispose();
      glowTexture.dispose();
      travelingLights.forEach(light => {
        light.material.dispose();
        scene.remove(light);
        scene.remove(light.userData.pointLight);
        light.userData.trail.forEach(dot => {
          dot.material.dispose();
          scene.remove(dot);
        });
      });
    };
  }, []);

  return <GlobeCanvas ref={containerRef} />;
};

export default Globe;
