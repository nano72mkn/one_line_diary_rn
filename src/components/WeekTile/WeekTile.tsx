import React, { useState } from 'react';

import { View } from 'react-native';
import { getThisWeek } from 'src/utils/getThisWeek';
import { useTailwind } from 'tailwind-rn';

import { WeekTileButton } from '../WeekTileButton';

export const WeekTile: React.FC = () => {
  const tailwind = useTailwind();
  const thisWeekData = getThisWeek();

  const [selectedWeekDay, setWeekDay] = useState(
    thisWeekData.find((data) => data.isToday)?.week,
  );

  return (
    <View style={tailwind('p-5 w-full')}>
      <View
        style={[
          tailwind(
            'p-3 bg-white rounded-lg flex flex-row justify-between items-center',
          ),
          {
            shadowColor: '#000',
            shadowOffset: { width: 5, height: 10 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
        ]}
      >
        <WeekTileButton
          iconColor="bg-red-300"
          date={thisWeekData[0].date}
          selected={selectedWeekDay === 0}
          onPress={() => setWeekDay(0)}
        />
        <WeekTileButton
          iconColor="bg-yellow-300"
          date={thisWeekData[1].date}
          selected={selectedWeekDay === 1}
          onPress={() => setWeekDay(1)}
        />
        <WeekTileButton
          iconColor="bg-pink-300"
          date={thisWeekData[2].date}
          selected={selectedWeekDay === 2}
          onPress={() => setWeekDay(2)}
        />
        <WeekTileButton
          iconColor="bg-blue-300"
          date={thisWeekData[3].date}
          selected={selectedWeekDay === 3}
          onPress={() => setWeekDay(3)}
        />
        <WeekTileButton
          iconColor="bg-green-300"
          date={thisWeekData[4].date}
          selected={selectedWeekDay === 4}
          onPress={() => setWeekDay(4)}
        />
        <WeekTileButton
          iconColor="bg-gray-600"
          date={thisWeekData[5].date}
          selected={selectedWeekDay === 5}
          onPress={() => setWeekDay(5)}
        />
        <WeekTileButton
          iconColor="bg-purple-300"
          date={thisWeekData[6].date}
          selected={selectedWeekDay === 6}
          onPress={() => setWeekDay(6)}
        />
      </View>
    </View>
  );
};
