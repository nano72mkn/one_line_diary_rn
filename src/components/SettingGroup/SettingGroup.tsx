import React, { ComponentProps } from 'react';

import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { SettingButton } from '../SettingButton/SettingButton';

type SettingGroupProps = {
  header?: string;
  data: ComponentProps<typeof SettingButton>[];
};

export const SettingGroup: React.FC<SettingGroupProps> = ({ header, data }) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4 w-full')}>
      {header && (
        <View style={tailwind('p-3')}>
          <Text style={tailwind('text-gray-600 text-lg font-bold')}>
            {header}
          </Text>
        </View>
      )}
      <View style={tailwind('bg-white rounded-lg')}>
        {data.map((buttonProps, index) => (
          <View key={index} style={tailwind('w-full')}>
            <SettingButton {...buttonProps} />
          </View>
        ))}
      </View>
    </View>
  );
};
