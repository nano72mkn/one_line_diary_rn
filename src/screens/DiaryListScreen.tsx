import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { DiaryItemGroup } from 'src/components/DiaryItemGroup';

import type { DiaryStackParamList } from 'src/roots/stacks/DiaryStack';

type Props = NativeStackScreenProps<DiaryStackParamList, 'DiaryList'>;

export const DiaryListScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DiaryItemGroup />
    </View>
  );
};
