'use client';

import { View } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const ViewCanvas = () => {
  return (
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
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
