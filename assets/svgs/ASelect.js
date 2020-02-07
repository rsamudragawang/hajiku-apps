import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAccount = props => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx="12.5" cy="12.5" r="12.5" fill="white" />
    <Path
      d="M14.672 14.732H9.772L8.806 17H6.93L11.34 7.2H13.132L17.556 17H15.652L14.672 14.732ZM14.07 13.304L12.222 9.02L10.388 13.304H14.07Z"
      fill="#FF4057"
    />
  </Svg>
);

export default SvgAccount;
