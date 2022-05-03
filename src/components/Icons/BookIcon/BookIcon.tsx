import React from 'react';

import Svg, { Path } from 'react-native-svg';

export const BookIcon: React.FC = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6.253V19.253M12 6.253C10.832 5.477 9.246 5 7.5 5C5.754 5 4.168 5.477 3 6.253V19.253C4.168 18.477 5.754 18 7.5 18C9.246 18 10.832 18.477 12 19.253M12 6.253C13.168 5.477 14.754 5 16.5 5C18.247 5 19.832 5.477 21 6.253V19.253C19.832 18.477 18.247 18 16.5 18C14.754 18 13.168 18.477 12 19.253"
        stroke="#3F3F46"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
