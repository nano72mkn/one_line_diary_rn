import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { AppleIcon } from 'src/components/Icons/AppleIcon';
import { ClipboardListIcon } from 'src/components/Icons/ClipboardListIcon';
import { GoogleIcon } from 'src/components/Icons/GoogleIcon';
import { LogoutIcon } from 'src/components/Icons/LogoutIcon';
import { MailIcon } from 'src/components/Icons/MailIcon';
import { SettingGroup } from 'src/components/SettingGroup';
import { SettingStackParamList } from 'src/roots/stacks/SettingStack';
import { i18n } from 'src/utils/i18n';
import { useTailwind } from 'tailwind-rn/dist';

type Props = NativeStackScreenProps<SettingStackParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('w-full')}>
      <SettingGroup
        header={i18n.t('login')}
        data={[
          { title: 'メールアドレス', onPress: () => {}, icon: MailIcon },
          { title: 'Google', onPress: () => {}, icon: GoogleIcon },
          { title: 'Apple', onPress: () => {}, icon: AppleIcon },
        ]}
      />
      <SettingGroup
        data={[
          {
            title: i18n.t('license'),
            onPress: () => navigation.navigate('License'),
            icon: ClipboardListIcon,
          },
        ]}
      />
      <SettingGroup
        data={[
          {
            title: i18n.t('logout'),
            onPress: () => {},
            icon: LogoutIcon,
            textColor: 'text-red-500',
          },
        ]}
      />
    </View>
  );
};
