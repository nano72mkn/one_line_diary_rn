import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { SettingStackParamList } from 'src/roots/stacks/SettingStack';
import { useTailwind } from 'tailwind-rn/dist';

type Props = NativeStackScreenProps<SettingStackParamList, 'License'>;

export const LicenseScreen: React.FC<Props> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('w-full')}>
      <Text>LicenseScreen</Text>
    </View>
  );
};
