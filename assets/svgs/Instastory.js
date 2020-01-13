import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
import { COLOR_WHITE } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgInstastory = props => (
  <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle
        fill={"none"}
        stroke={COLOR_WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.7}
        strokeMiterlimit={10}
        cx={24}
        cy={24}
        r={15.344}
      />
      <Path
        fill={"none"}
        stroke={COLOR_WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.7}
        strokeMiterlimit={10}
        d="M21.66 11.48a12.866 12.866 0 0 1 1.614-.185m-8.038 3.373c1.441-1.241 3.226-2.355 5.105-2.886"
      />
      <Circle
        fill={"none"}
        stroke={COLOR_WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.7}
        strokeMiterlimit={10}
        cx={24}
        cy={24}
        r={3.215}
      />
      <Circle cx={28.248} cy={19.891} r={0.462} fill={COLOR_WHITE} />
      <Path
        fill={"none"}
        stroke={COLOR_WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.7}
        strokeMiterlimit={10}
        d="M27.198 30.765h-6.396a3.571 3.571 0 0 1-3.567-3.567v-6.396a3.57 3.57 0 0 1 3.567-3.567h6.396a3.57 3.57 0 0 1 3.567 3.567v6.396a3.57 3.57 0 0 1-3.567 3.567z"
      />
    </G>
  </Svg>
);

export default SvgInstastory;
