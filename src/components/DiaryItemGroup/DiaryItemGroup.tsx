import React from 'react';

import { SectionList, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { DiaryItem } from '../DiaryItem/DiaryItem';
import { DiaryItemTitle } from '../DiaryItemTitle';

export const DiaryItemGroup: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <SectionList
      style={tailwind('p-3 w-full')}
      sections={[
        { date: '2022-12-30', data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
        { date: '2022-12-31', data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
      ]}
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
