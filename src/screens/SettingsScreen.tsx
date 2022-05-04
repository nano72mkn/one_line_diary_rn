import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { BookIcon } from 'src/components/Icons/BookIcon';
import { ClipboardListIcon } from 'src/components/Icons/ClipboardListIcon';
import { LogoutIcon } from 'src/components/Icons/LogoutIcon';
import { MailIcon } from 'src/components/Icons/MailIcon';
import { SettingGroup } from 'src/components/SettingGroup';
import { useTailwind } from 'tailwind-rn/dist';

import type { NavigationDrawerParamList } from 'src/roots/drawers/NavigationDrawer';

type Props = NativeStackScreenProps<NavigationDrawerParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = () => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('w-full')}>
      <SettingGroup
        header="ログイン"
        data={[
          { title: 'メールアドレス', onPress: () => {}, icon: MailIcon },
          { title: 'Google', onPress: () => {}, icon: BookIcon },
          { title: 'Apple', onPress: () => {}, icon: BookIcon },
        ]}
      />
      <SettingGroup
        data={[
          { title: 'ライセンス', onPress: () => {}, icon: ClipboardListIcon },
        ]}
      />
      <SettingGroup
        data={[
          {
            title: 'ログアウト',
            onPress: () => {},
            icon: LogoutIcon,
            textColor: 'text-red-500',
          },
        ]}
      />
    </View>
  );
};
