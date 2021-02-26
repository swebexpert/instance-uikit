import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width={26} height={26} href={'images/LogoTextNewMobile.png'}/>
    </Svg>
  );
};

export default Icon;
