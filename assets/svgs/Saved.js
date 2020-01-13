import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgSaved = props => (
  <Svg viewBox="0 0 48 48" {...props}>
    <G id="saved_svg__saved_svg__Icons">
      <Path
        className="saved_svg__saved_svg__st1"
        d="M30.373 33.96l-5.961-8.792a.497.497 0 0 0-.824 0l-5.961 8.792a.497.497 0 0 1-.91-.28V14.319c0-.274.223-.497.498-.497h13.57c.275 0 .498.223.498.497v19.363c0 .49-.635.685-.91.279zM19.164 16.127h5.035m1.343 0h1.048"
      />
      <Path
        className="saved_svg__saved_svg__st1"
        d="M30.373 33.96l-5.961-8.792a.497.497 0 0 0-.824 0l-5.961 8.792a.497.497 0 0 1-.91-.28V14.319c0-.274.223-.497.498-.497h13.57c.275 0 .498.223.498.497v19.363c0 .49-.635.685-.91.279z"
      />
    </G>
  </Svg>
);

export default SvgSaved;
