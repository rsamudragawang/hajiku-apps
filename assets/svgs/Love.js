import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { COLOR_BASE_PRIMARY_LIGHT, COLOR_WHITE } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLove = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_LIGHT : "none";
  const colorSeccond = props.active ? COLOR_WHITE : COLOR_BASE_PRIMARY_LIGHT;
  return (
    <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
      <G fill={"none"}>
        <Path
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M12.27 25.747l11.308 11.307a.602.602 0 0 0 .852 0l11.3-11.307.835-.827a8.282 8.282 0 0 0 2.412-5.867 8.267 8.267 0 0 0-2.412-5.867c-3.222-3.222-8.503-3.222-11.734 0l-.827.836-.835-.836c-3.222-3.222-8.503-3.222-11.725 0a8.24 8.24 0 0 0-2.421 5.867c0 2.119.801 4.256 2.42 5.867l.828.827 11.307 11.307a.602.602 0 0 0 .852 0l11.3-11.307m-24.274-5.891c0 .437.04.875.122 1.307"
        />
        <Path
          fill={colorSeccond}
          stroke={colorSeccond}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M17.065 13.045a6.89 6.89 0 0 0-3.581 1.898 6.832 6.832 0 0 0-1.622 2.554"
        />
      </G>
    </Svg>
  );
}

export default SvgLove;
