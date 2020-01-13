import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowUp = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      d="M11.434 9.084l-5.218 5.62a.67.67 0 0 0 .982.912l4.236-4.563a.74.74 0 0 1 1.084 0l4.277 4.606a.67.67 0 0 0 .982-.912l-5.259-5.663a.74.74 0 0 0-1.084 0z"
      fill="#1E2025"
    />
  </Svg>
);

export default SvgArrowUp;
