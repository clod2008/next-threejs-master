'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Cargando escena 3D...
    </div>
  )
});

export default function SceneContainer() {
  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
} 