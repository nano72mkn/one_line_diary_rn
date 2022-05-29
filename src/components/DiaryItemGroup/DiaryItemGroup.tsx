import React from 'react';

import { SectionList, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { DiaryItem } from '../DiaryItem/DiaryItem';
import { DiaryItemTitle } from '../DiaryItemTitle';
import { WeekTile } from '../WeekTile';

export const DiaryItemGroup: React.FC = () => {
  const tailwind = useTailwind();

  const diaryData = [
    { date: '2022-12-30', data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
    { date: '2022-12-31', data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
  ];

  return (
    <SectionList
      ListHeaderComponent={
        <View style={tailwind('mb-5')}>
          <WeekTile />
        </View>
      }
      style={tailwind('p-3 w-full')}
      sections={diaryData}
      renderItem={() => (
        <View style={tailwind('mb-3')}>
          <DiaryItem />
        </View>
      )}
      renderSectionHeader={({ section: { date } }) => (
        <DiaryItemTitle date={date} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
