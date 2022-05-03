import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DiaryListScreen } from 'src/screens/DiaryListScreen';
import { SettingsScreen } from 'src/screens/SettingsScreen';
import { i18n } from 'src/utils/i18n';

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
        options={{ title: i18n.t('diary') }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: i18n.t('setting') }}
      />
    </Drawer.Navigator>
  );
};
