'use client';

import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Grid,
  Stats,
  TransformControls
} from '@react-three/drei';
import TestCube from './TestCube';
import { Suspense } from 'react';

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Suspense fallback={null}>
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[5, 5, 5]} />
            <color attach="background" args={['#f0f0f0']} />
            
            {/* Iluminación */}
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              castShadow 
              shadow-mapSize={[1024, 1024]}
            />
            
            {/* Controles */}
            <OrbitControls 
              makeDefault 
              minDistance={3}
              maxDistance={10}
            />
            <TransformControls mode="translate" />
            
            {/* Elementos de la escena */}
            <TestCube />
            <Grid 
              infiniteGrid 
              cellSize={1} 
              cellThickness={0.5} 
              cellColor="#6f6f6f" 
              sectionSize={3} 
              sectionThickness={1} 
              sectionColor="#9d4b4b" 
              fadeDistance={30} 
              fadeStrength={1} 
              followCamera={false} 
            />
            
            {/* Ambiente */}
            <Environment preset="city" />
          </Suspense>
          <Stats />
        </Canvas>
      </Suspense>
    </div>
  );
} 