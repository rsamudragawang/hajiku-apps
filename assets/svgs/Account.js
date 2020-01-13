import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAccount = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_LIGHT : "none";
  const colorSeccond = props.active ? COLOR_BASE_PRIMARY_LIGHT : "none";
  return (
    <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          cx={24}
          cy={19.15}
          r={7.264}
        />
        <Path
          fill={colorSeccond}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M19.122 17.236a4.483 4.483 0 0 1 5.274-3.517M11.542 36.113c0-3.89 3.182-7.072 7.072-7.072h10.772c3.89 0 7.072 3.182 7.072 7.072M18.982 18.687s-.108.993 0 1.449"
        />
      </G>
    </Svg>
  );
}

export default SvgAccount;
