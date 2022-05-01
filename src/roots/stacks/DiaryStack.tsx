import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiaryListScreen } from 'screens/DiaryListScreen';

export type DiaryStackParamList = {
  DiaryList: undefined;
};

const Stack = createNativeStackNavigator<DiaryStackParamList>();

export const DiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName="DiaryList">
      <Stack.Screen name="DiaryList" component={DiaryListScreen} />
    </Stack.Navigator>
  );
};
