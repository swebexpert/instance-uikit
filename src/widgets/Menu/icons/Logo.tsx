import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <image width={26} height={26} href={isDark ? 'images/LogoTextNewDark.png' : 'images/LogoTextNewWhite.png'}/>
      <p color={textColor}>InstanceSwap</p>
    </Svg>
  );
};

export default Logo;
