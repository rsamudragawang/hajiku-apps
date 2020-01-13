import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgVideo = props => (
  <Svg viewBox="0 0 48 48" {...props}>
    <G id="video_svg__video_svg__Icons">
      <Path
        className="video_svg__video_svg__st1"
        d="M38.015 26.51v2.008a.787.787 0 0 1-.787.787h-2.203a.724.724 0 0 1-.471-.17l-4.057-3.07a.18.18 0 0 0-.29.144v3.654a2.012 2.012 0 0 1-2.009 2.01H11.982a2.001 2.001 0 0 1-1.997-2.01V18.137c0-1.114.896-2.01 1.997-2.01h16.216c1.102 0 2.01.896 2.01 2.01v3.799c0 .1.113.156.192.095l4.154-3.17a.736.736 0 0 1 .472-.169h2.202c.434 0 .787.352.787.787v7.03z"
      />
      <Circle
        className="video_svg__video_svg__st1"
        cx={20.096}
        cy={23.999}
        r={3.478}
      />
      <Path
        className="video_svg__video_svg__st1"
        d="M15.049 17.762h5.771m1.955 0h1.397"
      />
    </G>
  </Svg>
);

export default SvgVideo;
