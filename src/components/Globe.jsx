import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { useMemo } from 'react';

const GlobeCanvas = styled.div`
  position: ${props => props.$fullscreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.$fullscreen ? '1' : '0'};
  background: transparent;
  pointer-events: auto;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

// Geographic coordinates to Three.js coordinates conversion
const geoToVector3 = (lat, lng, radius) => {
  // Convert latitude and longitude to radians
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  // Convert spherical coordinates to Cartesian coordinates
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  return new THREE.Vector3(x, y, z);
};

const Globe = ({ fullscreen = false, year = new Date().getFullYear() }) => {
  const containerRef = useRef();
  
  // Define location data with years
  const locationData = useMemo(() => [
    {
      name: "Colombia",
      lat: 4.5709, // Latitude for Colombia (approximate center)
      lng: -74.2973, // Longitude for Colombia (approximate center)
      startYear: 1993,
      endYear: 2000,
      color: 0xff69b4, // Pink color to match the gradient theme
    },
    {
      name: "Phoenix, AZ",
      lat: 33.4484, // Latitude for Phoenix, Arizona
      lng: -112.0740, // Longitude for Phoenix, Arizona
      startYear: 2001,
      endYear: 2012,
      color: 0x87CEEB, // Light blue color to match the gradient theme
    },
    {
      name: "South Bend, IN",
      lat: 41.6764, // Latitude for South Bend, Indiana
      lng: -86.2520, // Longitude for South Bend, Indiana
      startYear: 2013,
      endYear: 2016,
      color: 0x9370DB, // Purple color to match the gradient theme
    },
    {
      name: "Austin, TX",
      lat: 30.2672, // Latitude for Austin, Texas
      lng: -97.7431, // Longitude for Austin, Texas
      startYear: 2017,
      endYear: 2019,
      color: 0x32CD32, // Lime green color to match the gradient theme
    },
    {
      name: "Phoenix, AZ",
      lat: 33.4484, // Latitude for Phoenix, Arizona
      lng: -112.0740, // Longitude for Phoenix, Arizona
      startYear: 2020,
      endYear: 2020,
      color: 0x87CEEB, // Light blue color to match the gradient theme
    },
    {
      name: "Salt Lake City, UT",
      lat: 40.7608, // Latitude for Salt Lake City, Utah
      lng: -111.8910, // Longitude for Salt Lake City, Utah
      startYear: 2021,
      endYear: 2021,
      color: 0xFFA500, // Orange color to match the gradient theme
    },
    {
      name: "Phoenix, AZ",
      lat: 33.4484, // Latitude for Phoenix, Arizona
      lng: -112.0740, // Longitude for Phoenix, Arizona
      startYear: 2022,
      endYear: 2025,
      color: 0x87CEEB, // Light blue color to match the gradient theme
    }
    // Add more locations as needed
  ], []);

  useEffect(() => {
    // Log the selected year (for debugging)
    console.log(`Globe rendering for year: ${year}`);
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const updateSize = () => {
      if (fullscreen) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
      } else {
        const rect = containerRef.current.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        camera.aspect = rect.width / rect.height;
      }
      camera.updateProjectionMatrix();
    };
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    updateSize();

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
    
    // Create location markers
    const locationMarkers = [];
    const markerRadius = 0.82; // Slightly larger than globe radius to ensure visibility
    
    locationData.forEach(location => {
      // Check if the marker should be visible for the current year
      const isVisible = year >= location.startYear && year <= location.endYear;
      
      if (isVisible) {
        // Create marker geometry
        const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const markerMaterial = new THREE.MeshPhongMaterial({
          color: location.color,
          emissive: location.color,
          emissiveIntensity: 0.5,
          specular: 0xffffff,
          shininess: 100
        });
        
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        
        // Position the marker based on geographic coordinates
        const position = geoToVector3(location.lat, location.lng, markerRadius);
        marker.position.copy(position);
        
        // Add a pulsing effect
        marker.userData = {
          baseScale: 1.0,
          originalPosition: position.clone()
        };
        
        // Add a point light at the marker location
        const markerLight = new THREE.PointLight(location.color, 0.8, 0.3);
        markerLight.position.copy(position);
        
        // Create a label for the location
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 64;
        
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.font = 'Bold 24px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Add glow effect
        context.shadowColor = 'rgba(255, 255, 255, 0.8)';
        context.shadowBlur = 7;
        context.fillStyle = 'white';
        context.fillText(location.name, canvas.width / 2, canvas.height / 2);
        
        const labelTexture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.SpriteMaterial({
          map: labelTexture,
          transparent: true
        });
        
        const label = new THREE.Sprite(labelMaterial);
        label.position.copy(position.clone().multiplyScalar(1.1)); // Position slightly above the marker
        label.scale.set(0.3, 0.075, 1);
        
        // Store references for animation and cleanup
        locationMarkers.push({
          marker,
          light: markerLight,
          label,
          labelTexture,
          labelMaterial,
          markerMaterial,
          markerGeometry
        });
        
        // Add to scene
        scene.add(marker);
        scene.add(markerLight);
        scene.add(label);
      }
    });

    // Create a text label for the year with enhanced visibility
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;
    
    // Create a more visible background with gradient
    const bgGradient = context.createRadialGradient(
      canvas.width / 2, 
      canvas.height / 2, 
      10,
      canvas.width / 2, 
      canvas.height / 2, 
      canvas.width / 2
    );
    bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
    bgGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.4)');
    bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    context.fillStyle = bgGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add outer glow
    context.shadowColor = 'rgba(255, 255, 255, 0.8)';
    context.shadowBlur = 25;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    
    // Draw text with larger font
    context.font = 'Bold 100px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    // Create text gradient matching the hover text colors from the rest of the page
    const textGradient = context.createLinearGradient(
      canvas.width * 0.3, 
      canvas.height * 0.5, 
      canvas.width * 0.7, 
      canvas.height * 0.5
    );
    textGradient.addColorStop(0, 'rgba(255, 105, 180, 1.0)'); // #ff69b4 (pink)
    textGradient.addColorStop(0.5, 'rgba(135, 206, 235, 1.0)'); // #87CEEB (light blue)
    textGradient.addColorStop(1, 'rgba(255, 105, 180, 1.0)'); // #ff69b4 (pink)
    
    context.fillStyle = textGradient;
    context.fillText(year.toString(), canvas.width / 2, canvas.height / 2);
    
    // Add thicker border for better visibility
    context.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    context.lineWidth = 3;
    context.strokeText(year.toString(), canvas.width / 2, canvas.height / 2);
    
    // Add second glow layer with matching colors
    context.shadowColor = 'rgba(135, 206, 235, 0.7)'; // Light blue glow
    context.shadowBlur = 15;
    context.fillStyle = 'rgba(255, 255, 255, 0.1)';
    context.fillText(year.toString(), canvas.width / 2, canvas.height / 2);
    
    // Add third glow layer for pink hue
    context.shadowColor = 'rgba(255, 105, 180, 0.7)'; // Pink glow
    context.shadowBlur = 10;
    context.fillText(year.toString(), canvas.width / 2, canvas.height / 2);
    
    const yearTexture = new THREE.CanvasTexture(canvas);
    const yearMaterial = new THREE.SpriteMaterial({ 
      map: yearTexture,
      transparent: true,
      opacity: 0.0, // Start invisible
      depthTest: false,
      blending: THREE.AdditiveBlending
    });
    
    const yearSprite = new THREE.Sprite(yearMaterial);
    yearSprite.position.set(0, -1.4, 0); // Position slightly lower for better visibility
    yearSprite.scale.set(1.5, 0.75, 1); // Larger scale for better visibility
    scene.add(yearSprite);
    
    // Fade in the year label with a more elegant animation
    const fadeInDuration = 1500; // ms
    const startTime = Date.now();
    const fadeIn = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / fadeInDuration, 1);
      
      // Use easeOutCubic for smoother animation
      const eased = 1 - Math.pow(1 - progress, 3);
      yearMaterial.opacity = eased * 1.0; // Full opacity for better visibility
      
      if (progress < 1) {
        requestAnimationFrame(fadeIn);
      }
    };
    fadeIn();
    
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
      const arcProgress = Math.sin(progress * Math.PI) * (1 - Math.abs(progress - 0.5));
      return pos.add(up.multiplyScalar(arcHeight * arcProgress * 2));
    }

    // Traveling lights setup
    const travelingLights = [];
    const maxLights = 40;
    const baseRadius = 0.82;
    const maxArcHeight = 0.8;
    const trailLength = 35;
    
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
      light.scale.set(0.06, 0.06, 1);
      
      const hue = 0.15 + Math.random() * 0.05;
      const saturation = 0.3;
      const lightness = 0.9;
      light.material.color.setHSL(hue, saturation, lightness);
      
      const pointLight = new THREE.PointLight(0xffffcc, 0.6, 0.4);
      
      const distance = startPos.distanceTo(endPos);
      const arcHeight = maxArcHeight * (distance / (2 * baseRadius));
      
      const trail = [];
      for (let i = 0; i < trailLength; i++) {
        const trailDot = new THREE.Sprite(trailMaterial.clone());
        trailDot.material.color.setHSL(hue, saturation, lightness);
        trailDot.scale.set(0.03, 0.03, 1);
        scene.add(trailDot);
        trail.push(trailDot);
      }
      
      light.userData = {
        startPos: startPos.clone(),
        endPos: endPos.clone(),
        progress: 0,
        speed: 0.001 + Math.random() * 0.002,
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

    // Animation and interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let momentumX = 0;
    let momentumY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let autoRotate = true;
    
    const handleMouseDown = (event) => {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
      autoRotate = false;
      
      // Reset momentum when starting a new drag
      momentumX = 0;
      momentumY = 0;
    };
    
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      
      const deltaX = event.clientX - previousMouseX;
      const deltaY = event.clientY - previousMouseY;
      
      // Update rotation based on mouse movement
      // Convert pixel movement to rotation (radians)
      targetRotationY += deltaX * 0.005;
      targetRotationX -= deltaY * 0.005;
      
      // Limit vertical rotation to avoid flipping
      targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));
      
      // Update momentum based on mouse movement
      momentumX = deltaX * 0.002;
      momentumY = -deltaY * 0.002;
      
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      
      // If momentum is significant, keep rotating
      if (Math.abs(momentumX) > 0.001 || Math.abs(momentumY) > 0.001) {
        autoRotate = false;
      } else {
        // If almost no momentum, revert to auto-rotation
        setTimeout(() => {
          autoRotate = true;
        }, 1000);
      }
    };
    
    // Handle mouse leaving the element
    const handleMouseLeave = () => {
      if (isDragging) {
        isDragging = false;
        
        // If momentum is significant, keep rotating
        if (Math.abs(momentumX) > 0.001 || Math.abs(momentumY) > 0.001) {
          autoRotate = false;
        } else {
          // If almost no momentum, revert to auto-rotation
          setTimeout(() => {
            autoRotate = true;
          }, 1000);
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Apply momentum if not dragging
      if (!isDragging) {
        // Apply momentum with decay
        targetRotationY += momentumX;
        targetRotationX += momentumY;
        
        // Decay momentum over time
        momentumX *= 0.95;
        momentumY *= 0.95;
        
        // If momentum is very small, reset it to zero
        if (Math.abs(momentumX) < 0.0001) momentumX = 0;
        if (Math.abs(momentumY) < 0.0001) momentumY = 0;
        
        // If no momentum and autoRotate is true, apply auto rotation
        if (momentumX === 0 && momentumY === 0 && autoRotate) {
          targetRotationY += 0.003;
        }
      }
      
      // Limit vertical rotation to avoid flipping
      targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));
      
      // Apply rotation with smooth interpolation
      sphere.rotation.y += (targetRotationY - sphere.rotation.y) * 0.05;
      sphere.rotation.x += (targetRotationX - sphere.rotation.x) * 0.05;
      
      // Update lights
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

        const progress = light.userData.progress;
        const currentPos = calculateArcPosition(startPos, endPos, progress, arcHeight);
        light.position.copy(currentPos);

        trailPositions.unshift(currentPos.clone());
        if (trailPositions.length > trailLength) {
          trailPositions.pop();
        }

        trail.forEach((dot, index) => {
          if (index < trailPositions.length) {
            dot.position.copy(trailPositions[index]);
            const opacity = Math.pow(1 - (index / trailLength), 1.5);
            dot.material.opacity = opacity * 0.7;
            dot.scale.setScalar(0.03 * opacity);
          }
        });

        const pulseScale = baseScale * (1 + Math.sin(time * 8 + i) * 0.3);
        light.scale.set(pulseScale, pulseScale, 1);

        pointLight.position.copy(currentPos);
        pointLight.intensity = 0.6 + Math.sin(time * 8 + i) * 0.3;

        if (progress > 0.9) {
          const fade = (1 - progress) * 10;
          light.material.opacity = fade;
          pointLight.intensity *= fade;
          trail.forEach(dot => {
            dot.material.opacity *= fade;
          });
        }

        const rotation = new THREE.Euler(sphere.rotation.x, sphere.rotation.y, 0);
        light.position.applyEuler(rotation);
        pointLight.position.copy(light.position);
        trail.forEach(dot => {
          dot.position.applyEuler(rotation);
        });
      }
      
      // Update location markers
      locationMarkers.forEach(({ marker, light, label }) => {
        // Apply the same rotation as the globe to keep markers in place
        const rotation = new THREE.Euler(sphere.rotation.x, sphere.rotation.y, 0);
        
        // Reset position to original
        marker.position.copy(marker.userData.originalPosition);
        light.position.copy(marker.userData.originalPosition);
        label.position.copy(marker.userData.originalPosition.clone().multiplyScalar(1.1));
        
        // Apply rotation
        marker.position.applyEuler(rotation);
        light.position.copy(marker.position);
        label.position.copy(marker.position.clone().multiplyScalar(1.1));
        
        // Add pulsing effect to marker
        const pulseScale = 1 + Math.sin(time * 3) * 0.2;
        marker.scale.set(pulseScale, pulseScale, pulseScale);
        
        // Make light intensity pulse
        light.intensity = 0.6 + Math.sin(time * 3) * 0.4;
      });

      if (travelingLights.length < maxLights && Math.random() < 0.03) {
        createTravelingLight();
      }

      const autoRotationSpeed = 0.001;
      const mouseInfluence = Math.max(0, 1 - (Math.abs(targetRotationY) + Math.abs(targetRotationX)));
      sphere.rotation.y += autoRotationSpeed * mouseInfluence;
      
      sphere.rotation.x += Math.sin(time * 0.5) * 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    // Add event listeners
    if (fullscreen) {
      containerRef.current.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('resize', updateSize);
    } else {
      containerRef.current.addEventListener('mousedown', handleMouseDown);
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseup', handleMouseUp);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (fullscreen) {
        containerRef.current?.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', updateSize);
      } else {
        containerRef.current?.removeEventListener('mousedown', handleMouseDown);
        containerRef.current?.removeEventListener('mousemove', handleMouseMove);
        containerRef.current?.removeEventListener('mouseup', handleMouseUp);
        containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      }
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      spriteMaterial.dispose();
      trailMaterial.dispose();
      glowTexture.dispose();
      yearTexture.dispose();
      yearMaterial.dispose();
      
      // Clean up location markers
      locationMarkers.forEach(({ marker, light, label, labelTexture, labelMaterial, markerMaterial, markerGeometry }) => {
        scene.remove(marker);
        scene.remove(light);
        scene.remove(label);
        labelTexture.dispose();
        labelMaterial.dispose();
        markerMaterial.dispose();
        markerGeometry.dispose();
      });
      
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
  }, [fullscreen, year]); // Add year to dependency array

  return (
    <GlobeCanvas
      ref={containerRef}
      $fullscreen={fullscreen}
    />
  );
};

export default Globe;
