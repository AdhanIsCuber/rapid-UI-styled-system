import React from "react";
import { color, layout, space, borderRadius } from "styled-system";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 16px;
  background-color: red;
  ${color}
  ${layout}
  ${space}
  ${borderRadius}
`;

const Button = ({ children, m = 16, p = 16, ...props }) => (
  <ButtonStyled m={m} p={p} {...props}>
    {children}
  </ButtonStyled>
);

export default Button;

// w={[ 1, 1 / 2, 1 / 4 ]}
// w={[ 1, '260px', '10em' ]}
// theme -> w={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
