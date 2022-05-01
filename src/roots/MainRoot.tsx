import React from "react";
import { DiaryStack } from "./stacks/DiaryStack";
import { NavigationContainer } from '@react-navigation/native';

export const MainRoot: React.FC = () => {
  return (
    <NavigationContainer>
      <DiaryStack />
    </NavigationContainer>
  )
}
