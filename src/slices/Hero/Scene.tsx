'use client';

import { Environment } from '@react-three/drei';

import FloatingCan from '@/components/FloatingCan';

const Scene = () => {
  return (
    <group>
      <FloatingCan />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default Scene;
