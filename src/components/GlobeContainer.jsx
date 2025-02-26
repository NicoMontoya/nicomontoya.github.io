import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import Globe from './Globe';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, #f5f5f5, #e5e5e5);
`;

const GlobeContainer = () => {
  return (
    <Container>
      <Canvas
        camera={{
          position: [0, 0, 3],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Globe />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Container>
  );
};

export default GlobeContainer;
