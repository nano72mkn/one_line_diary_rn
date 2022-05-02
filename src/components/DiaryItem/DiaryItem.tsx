import React from 'react';

import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export const DiaryItem: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4 bg-white w-full rounded-md')}>
      <Text style={tailwind('text-gray-600 pb-3')}>
        ここに日記が表示されますここに日記が表示されますここに日記が表示されますここに日記が表示されますここに日記が表示されますここに日記が表示されますここに日記が表示されます
      </Text>
      <Text style={tailwind('text-gray-400 text-xs text-right')}>12:00</Text>
    </View>
  );
};
