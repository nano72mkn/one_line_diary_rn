import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DiaryListScreen } from 'src/screens/DiaryListScreen';

export type NavigationDrawerParamList = {
  DiaryList: undefined;
};

const Drawer = createDrawerNavigator<NavigationDrawerParamList>();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="DiaryList">
      <Drawer.Screen name="DiaryList" component={DiaryListScreen} />
    </Drawer.Navigator>
  );
};
