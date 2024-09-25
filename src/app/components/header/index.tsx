
import React from "react";
import { StyledHeader } from "./style";

import logo from "../../images/logo.svg";
import Image from "next/image";

export const Header: React.FC<{props: {role: string, location: string}}> = ({props}) => {

  const {role, location} = props;

  return (
    <StyledHeader>
      <Image src={logo} alt="rafael cardoso logo" priority />
      <h1>{role}</h1>
      <h1>{location}</h1>
    </StyledHeader>
  );
};