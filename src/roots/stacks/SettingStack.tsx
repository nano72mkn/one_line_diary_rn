import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LicenseScreen } from 'src/screens/LicenseScreen';
import { i18n } from 'src/utils/i18n';

import { NavigationDrawer } from '../drawers/NavigationDrawer';

export type SettingStackParamList = {
  NavigationDrawer: undefined;
  Settings: undefined;
  License: undefined;
};

const Stack = createNativeStackNavigator<SettingStackParamList>();

export const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="NavigationDrawer">
      <Stack.Screen
        name="NavigationDrawer"
        component={NavigationDrawer}
        options={{ title: i18n.t('setting'), headerShown: false }}
      />
      <Stack.Screen
        name="License"
        component={LicenseScreen}
        options={{ title: i18n.t('license') }}
      />
    </Stack.Navigator>
  );
};
