import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DiaryListScreen } from 'src/screens/DiaryListScreen';
import { SettingsScreen } from 'src/screens/SettingsScreen';

export type NavigationDrawerParamList = {
  'One Line Diary': undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<NavigationDrawerParamList>();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="One Line Diary">
      <Drawer.Screen name="One Line Diary" component={DiaryListScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
