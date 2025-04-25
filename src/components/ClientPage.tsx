'use client';

import dynamic from 'next/dynamic';

const SceneContainer = dynamic(() => import('./three/SceneContainer'), {
  ssr: false
});

export default function ClientPage() {
  return <SceneContainer />;
} 