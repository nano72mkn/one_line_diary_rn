import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from 'src/screens/SplashScreen';

import { SettingStack } from './stacks/SettingStack';

export type MainStackParamList = {
  Splash: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();


export const MainRoot: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Main"
          component={SettingStack}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
