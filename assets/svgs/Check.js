import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheck = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M10.593 14.214l5.755-5.756a.62.62 0 1 1 .877.877l-6.11 6.11a.74.74 0 0 1-1.046 0l-3.28-3.281a.62.62 0 1 1 .876-.877l2.928 2.927z"
      fill="#1E2025"
    />
  </Svg>
);

export default SvgCheck;
