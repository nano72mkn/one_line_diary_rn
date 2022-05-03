import React from 'react';

import { ButtonProps, TouchableOpacity, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

type SettingButtonProps = {
  icon?: React.FC;
  textColor?: string;
} & ButtonProps;

export const SettingButton: React.FC<SettingButtonProps> = ({
  icon: Icon,
  textColor,
  ...buttonProps
}) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity
      //   accessible={accessible}
      //   accessibilityActions={accessibilityActions}
      //   onAccessibilityAction={onAccessibilityAction}
      //   accessibilityLabel={accessibilityLabel}
      //   accessibilityHint={accessibilityHint}
      //   accessibilityLanguage={accessibilityLanguage}
      accessibilityRole="button"
      //   accessibilityState={accessibilityState}
      //   hasTVPreferredFocus={hasTVPreferredFocus}
      //   nextFocusDown={nextFocusDown}
      //   nextFocusForward={nextFocusForward}
      //   nextFocusLeft={nextFocusLeft}
      //   nextFocusRight={nextFocusRight}
      //   nextFocusUp={nextFocusUp}
      //   testID={testID}
      disabled={buttonProps.disabled}
      onPress={buttonProps.onPress}
      //   touchSoundDisabled={touchSoundDisabled}
    >
      <View
        style={tailwind(
          'flex flex-row items-center p-4 bg-white w-full rounded-lg',
        )}
      >
        {Icon && (
          <View style={tailwind('mr-4')}>
            <Icon />
          </View>
        )}
        <Text style={tailwind(`${textColor ?? 'text-gray-700'}`)}>
          {buttonProps.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
