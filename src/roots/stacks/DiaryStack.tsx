import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestScreen } from 'screens/Test';

export type DiaryStackParamList = {
  Test: undefined;
};

const Stack = createNativeStackNavigator<DiaryStackParamList>();

export const DiaryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Test">
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
}
