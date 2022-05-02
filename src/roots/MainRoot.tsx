import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { NavigationDrawer } from './drawers/NavigationDrawer';

export const MainRoot: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <DiaryStack /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
};
