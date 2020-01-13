import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { COLOR_WHITE } from "../../app/styles";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgSetting = props => (
  <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
    <G fill={COLOR_WHITE}>
      <Path
         fill={"none"}
         stroke={COLOR_WHITE}
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={0.7}
         strokeMiterlimit={10}
        d="M28.85 30.05c-1.12.92-2.5 1.52-4.01 1.7m6.84-6.91c-.16 1.5-.75 2.88-1.64 4m1.64-5.69c-.16-1.5-.75-2.88-1.64-4m-1.19-1.2a7.754 7.754 0 0 0-4.01-1.71m-.91 1.42c-3.49 0-6.33 2.85-6.33 6.34s2.84 6.33 6.33 6.33 6.33-2.84 6.33-6.33-2.84-6.34-6.33-6.34zm-.78 14.1a7.715 7.715 0 0 1-4.06-1.65m-1.2-1.2a7.628 7.628 0 0 1-1.71-4.07m1.71-5.76a7.706 7.706 0 0 0-1.71 4.07m6.97-6.92c-1.52.15-2.92.75-4.06 1.66"
      />
      <Path
         fill={COLOR_WHITE}
         stroke={COLOR_WHITE}
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={0.7}
         strokeMiterlimit={10}
        d="M23.15 16.23V14.8h1.69v1.44m0 15.51v1.45h-1.69v-1.44m5.7-13.81l1.05-1.06 1.2 1.2-1.06 1.06m-12.15 9.76l-.99.99 1.19 1.2 1-.99m12.59-6.96h1.52v1.69h-1.52m-15.5 0H14.8v-1.69h1.38m13.86 5.69l1.06 1.06-1.2 1.2-1.05-1.05m-9.76-12.16l-1-1-1.19 1.2.99.99"
      />
    </G>
  </Svg>
);

export default SvgSetting;
