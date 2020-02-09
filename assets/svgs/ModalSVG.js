import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAccount = props => (
  <Svg width={98} height={99} viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M49 96C74.9574 96 96 74.9574 96 49C96 23.0426 74.9574 2 49 2C23.0426 2 2 23.0426 2 49C2 74.9574 23.0426 96 49 96Z"
      stroke="#FF4057"
      strokeWidth="4"
    />
    <Path
      d="M44.7306 57.456L42.9066 36.328L42.4506 25.08H55.5226L55.0666 36.328L53.2426 57.456H44.7306ZM48.9866 76.912C46.7573 76.912 44.9333 76.152 43.5146 74.632C42.096 73.112 41.3866 71.2373 41.3866 69.008C41.3866 66.7787 42.096 64.904 43.5146 63.384C44.9333 61.864 46.7573 61.104 48.9866 61.104C51.216 61.104 53.04 61.864 54.4586 63.384C55.8773 64.904 56.5866 66.7787 56.5866 69.008C56.5866 71.2373 55.8773 73.112 54.4586 74.632C53.04 76.152 51.216 76.912 48.9866 76.912Z"
      fill="#FF2E37"
    />
  </Svg>
);

export default SvgAccount;
