import React from 'react';

import Svg, { Path } from 'react-native-svg';

import type { IconProps } from '../Icon';

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 5L16 12L9 19"
        stroke="#3F3F46"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
