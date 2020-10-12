import React from "react";
import { color, layout, space, shadow, variant } from "styled-system";
import styled from "styled-components";

const CardStyled = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 16px;
  ${color}
  ${layout}
  ${space}
  ${shadow}
  ${variant({
    prop: "typeCard",
    variants: {
      primary: {
        color: "white",
        bg: "blue"
      },
      danger: {
        color: "white",
        bg: "red"
      }
    }
  })}
`;

const Card = ({ children, m = 16, ...props }) => (
  <CardStyled m={m} {...props}>
    {children}
  </CardStyled>
);

export default Card;
