'use client';

import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { View } from '@react-three/drei';

import Bounded from '@/components/Bounded';
import Scene from './Scene';

export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

const SkyDive: FC<SkyDiveProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">{slice.primary.sentence}</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence={slice.primary.sentence}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
