import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestScreen } from '../../screens/Test';

const Stack = createNativeStackNavigator();

export const TestStack = () => {
return (<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>)}
