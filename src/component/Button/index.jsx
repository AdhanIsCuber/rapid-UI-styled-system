import React from "react";
import { color, layout, space } from "styled-system";
import styled from "styled-components";

const ButtonStyled = styled.button`
  ${color}
  ${layout}
  ${space}
`;

const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

export default Button;
