import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgArrowDown = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M3.33334 3.33333H16.6667C17.5833 3.33333 18.3333 4.08333 18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33334C2.41667 16.6667 1.66667 15.9167 1.66667 15V5C1.66667 4.08333 2.41667 3.33333 3.33334 3.33333Z"
      stroke="#C4C4C4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M18.3333 5L10 10.8333L1.66667 5"
      stroke="#C4C4C4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgArrowDown;
