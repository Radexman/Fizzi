'use client';

import dynamic from 'next/dynamic';
import { View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Loader = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Loader),
  { ssr: false }
);

const ViewCanvas = () => {
  return (
    <>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 30,
        }}
        shadows
        dpr={2}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ViewCanvas;
