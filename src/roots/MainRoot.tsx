import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { SettingStack } from './stacks/SettingStack';

export const MainRoot: React.FC = () => {
  return (
    <NavigationContainer>
      <SettingStack />
    </NavigationContainer>
  );
};
