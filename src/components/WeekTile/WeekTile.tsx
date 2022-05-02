import React from 'react';

import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { WeekTileButton } from '../WeekTileButton';

export const WeekTile: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind('p-5 w-full flex flex-row justify-between items-center')}
    >
      <WeekTileButton />
      <WeekTileButton />
      <WeekTileButton />
      <WeekTileButton />
      <WeekTileButton />
      <WeekTileButton />
      <WeekTileButton />
    </View>
  );
};
