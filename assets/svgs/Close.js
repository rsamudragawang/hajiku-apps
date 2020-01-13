import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClose = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M12.002 11.126l5.488-5.488a.62.62 0 0 1 .877.877l-5.488 5.487 5.487 5.488a.62.62 0 0 1-.877.877l-5.487-5.488-5.487 5.487a.62.62 0 1 1-.877-.877l5.488-5.487-5.488-5.487a.62.62 0 0 1 .877-.877l5.487 5.488z"
      fill="#1E2025"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgClose;
