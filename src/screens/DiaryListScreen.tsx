import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { DiaryItemGroup } from 'src/components/DiaryItemGroup';
import { WeekTile } from 'src/components/WeekTile';
import { NavigationDrawerParamList } from 'src/roots/drawers/NavigationDrawer';

type Props = NativeStackScreenProps<NavigationDrawerParamList, 'DiaryList'>;

export const DiaryListScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <WeekTile />
      <DiaryItemGroup />
    </View>
  );
};
