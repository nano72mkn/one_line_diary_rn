import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';

import type { NavigationDrawerParamList } from 'src/roots/drawers/NavigationDrawer';

type Props = NativeStackScreenProps<NavigationDrawerParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = () => {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    ></View>
  );
};
