import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type WeekTileButtonProps = {
  iconColor: string;
  date: Date;
  selected: boolean;
  onPress: () => void;
};

export const WeekTileButton: React.FC<WeekTileButtonProps> = ({
  iconColor,
  date,
  selected,
  onPress,
}) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          `p-4 flex items-center ${
            selected ? 'bg-gray-100' : 'bg-white'
          } rounded-md`,
        )}
      >
        <View
          style={[
            tailwind(
              `rounded-full ${iconColor} mb-4 w-4 h-4 border-2 border-white`,
            ),
            {
              shadowColor: '#000',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            },
          ]}
        />
        <Text style={tailwind('text-gray-600')}>{date.getDate()}</Text>
      </View>
    </TouchableOpacity>
  );
};
