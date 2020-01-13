import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgTag = props => (
  <Svg viewBox="0 0 48 48" {...props}>
    <G id="tag_svg__tag_svg__Icons">
      <Circle
        className="tag_svg__tag_svg__st1"
        cx={23.998}
        cy={22.744}
        r={3.336}
      />
      <Path
        className="tag_svg__tag_svg__st1"
        d="M18.275 30.535a3.258 3.258 0 0 1 3.249-3.248h4.948a3.258 3.258 0 0 1 3.248 3.248M12.896 18.039v7.851m0 1.719v.749"
      />
      <Path
        className="tag_svg__tag_svg__st1"
        d="M26.785 14.357c.046.04.105.062.166.062l9.014.005c.77 0 1.4.62 1.4 1.4v18.555a1.48 1.48 0 0 1-1.475 1.475H12.11a1.479 1.479 0 0 1-1.475-1.475V15.824c0-.78.63-1.4 1.4-1.4h9.066a.34.34 0 0 0 .218-.08l2.536-2.15c.07-.065.35-.068.44.02l2.49 2.143z"
      />
    </G>
  </Svg>
);

export default SvgTag;
