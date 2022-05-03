import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';

import type { DiaryStackParamList } from 'src/roots/stacks/DiaryStack';

type Props = NativeStackScreenProps<DiaryStackParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = () => {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    ></View>
  );
};
