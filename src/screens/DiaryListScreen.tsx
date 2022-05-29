import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DiaryItemGroup } from 'src/components/DiaryItemGroup';
import { NavigationDrawerParamList } from 'src/roots/drawers/NavigationDrawer';

type Props = NativeStackScreenProps<NavigationDrawerParamList, 'DiaryList'>;

export const DiaryListScreen: React.FC<Props> = () => {
  return <DiaryItemGroup />;
};
