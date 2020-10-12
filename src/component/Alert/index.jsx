import React from "react";
import styled from "styled-components";
import { color, layout, position, padding } from "styled-system";

const AlertStyled = styled.div`
  display: initial;
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 500px;
  ${color}
  ${layout}
  ${position}
  ${padding}
`;

const Alert = ({ message, ...props }) => (
  <AlertStyled {...props}>{message}</AlertStyled>
);

export default Alert;
