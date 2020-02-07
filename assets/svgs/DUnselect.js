import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAccount = props => (
  <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx="12.5" cy="12.5" r="12.5" fill="#FF4057" />
    <Path
      d="M8.316 7.2H12.6C13.6453 7.2 14.574 7.40533 15.386 7.816C16.198 8.21733 16.828 8.79133 17.276 9.538C17.724 10.2753 17.948 11.1293 17.948 12.1C17.948 13.0707 17.724 13.9293 17.276 14.676C16.828 15.4133 16.198 15.9873 15.386 16.398C14.574 16.7993 13.6453 17 12.6 17H8.316V7.2ZM12.516 15.46C13.2347 15.46 13.8647 15.3247 14.406 15.054C14.9567 14.774 15.3767 14.382 15.666 13.878C15.9647 13.3647 16.114 12.772 16.114 12.1C16.114 11.428 15.9647 10.84 15.666 10.336C15.3767 9.82267 14.9567 9.43067 14.406 9.16C13.8647 8.88 13.2347 8.74 12.516 8.74H10.136V15.46H12.516Z"
      fill="#FFF"
    />
  </Svg>
);

export default SvgAccount;
