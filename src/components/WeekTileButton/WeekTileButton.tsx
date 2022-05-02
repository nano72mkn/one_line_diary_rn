import React from 'react';

import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export const WeekTileButton: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4 flex items-center bg-white rounded-md')}>
      <View
        style={[
          tailwind(
            'rounded-full bg-red-300 mb-4 w-4 h-4 border-2 border-white',
          ),
          {
            shadowColor: '#000',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        ]}
      />
      <Text style={tailwind('text-gray-600 pb-3')}>1</Text>
    </View>
  );
};
