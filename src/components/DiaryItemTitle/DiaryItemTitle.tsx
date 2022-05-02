import React from 'react';

import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type DiaryItemTitleProps = {
  date: string;
};

export const DiaryItemTitle: React.FC<DiaryItemTitleProps> = ({ date }) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4 w-full flex items-center')}>
      <Text style={tailwind('text-gray-600 pb-3')}>{date}</Text>
    </View>
  );
};
