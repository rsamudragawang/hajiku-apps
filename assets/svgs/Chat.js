import React from "react";
import Svg, { Path } from "react-native-svg";
import { COLOR_WHITE } from '../../app/styles';

const SvgChat = props => (
  <Svg height={48} width={48} viewBox="0 0 48 48" {...props}>
    <Path
      d="M15.632 22.085c0-3.752 3.92-6.984 7.673-6.984m6.665 19.321a11.985 11.985 0 0 1-6.952 1.549c-5.603-.447-10.246-4.867-10.934-10.446-.966-7.833 5.631-14.42 13.467-13.438 5.44.683 9.799 5.13 10.387 10.582a11.989 11.989 0 0 1-1.89 7.91.435.435 0 0 0-.07.288l.472 4.173-4.18-.674a.457.457 0 0 0-.3.056zM15.632 24.19s-.019.715.232 1.43"
      fill="none"
      stroke={COLOR_WHITE}
      strokeWidth={0.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  </Svg>
);

export default SvgChat;
