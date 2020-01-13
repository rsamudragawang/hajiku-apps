import React from "react";
import Svg, { Path } from "react-native-svg";
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';

const SvgAdd = props => {
  const strokeWidth = props.active ? 1.4 : 0.7;
  return(
  <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
    <Path
      d="M30.131 35.098H17.87a4.967 4.967 0 0 1-4.967-4.967V17.87a4.967 4.967 0 0 1 4.967-4.967h12.26a4.967 4.967 0 0 1 4.967 4.967v12.26a4.967 4.967 0 0 1-4.967 4.967zM24 20.147v7.706M20.147 24h7.706"
      fill="none"
      stroke={COLOR_BASE_PRIMARY_LIGHT}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  </Svg>
);
  }

export default SvgAdd;
