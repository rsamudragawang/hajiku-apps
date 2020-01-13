import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgHome = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_LIGHT : "none";
  return (
    <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M22.07 28.91c.3-.77 1.05-1.31 1.93-1.31.58 0 1.1.23 1.47.61.2.2.36.44.46.7"
        />
        <Path
          fill={color}
          stroke={COLOR_BASE_PRIMARY_LIGHT}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.7}
          strokeMiterlimit={10}
          d="M34.3 23.973v9.648a.98.98 0 0 1-.98.98h-7.24V29.68c0-.27-.05-.53-.15-.77-.1-.26-.26-.5-.46-.7-.37-.38-.89-.61-1.47-.61-.88 0-1.63.54-1.93 1.31-.1.24-.15.5-.15.77v4.923h-7.24a.98.98 0 0 1-.98-.98v-9.649c0-.436.173-.854.482-1.163l9.125-9.125a.98.98 0 0 1 1.387 0l9.124 9.125c.309.309.482.727.482 1.163zm-18.942 1.533v3.701m0 1.66v.889"
        />
      </G>
    </Svg>
  );
}

export default SvgHome;
