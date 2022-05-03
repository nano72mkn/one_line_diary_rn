import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DiaryListScreen } from 'src/screens/DiaryListScreen';
import { SettingsScreen } from 'src/screens/SettingsScreen';

export type NavigationDrawerParamList = {
  DiaryList: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<NavigationDrawerParamList>();

export const NavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="DiaryList">
      <Drawer.Screen
        name="DiaryList"
        component={DiaryListScreen}
        options={{ title: '日記' }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: '設定' }}
      />
    </Drawer.Navigator>
  );
};
