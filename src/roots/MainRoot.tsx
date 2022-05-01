import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DiaryStack } from './stacks/DiaryStack';

export const MainRoot: React.FC = () => {
  return (
    <NavigationContainer>
      <DiaryStack />
    </NavigationContainer>
  );
};
