import React from "react";
import { paddingTop } from "styled-system";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div {...props}>
      <Svg viewBox="0 0 26 26" width={26} marginRight="5px">
        <image width={26} height={26} href={isDark ? 'images/LogoTextNewDark.png' : 'images/LogoTextNewWhite.png'}/>
      </Svg>
      <div style={{color:textColor, alignSelf:"center"}}>InstanceSwap</div>
    </div>
  );
};

export default Logo;
