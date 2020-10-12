import React from "react";
import styled from "styled-components";

const ButtonStyledless = styled.button(
  (props) => `
    width: ${props.width || ""};
    maxWidth: ${props.maxW || ""};
    minWidth: ${props.minW || ""};
    height: ${props.height || ""};
    minHeight: ${props.minH || ""};
    maxHeight: ${props.maxH || ""};
    background-color: ${props.bg || ""};
    font-size: 16px;
    padding: ${props.padding || "40px"};
    margin: ${props.margin || "16px"};
    margin: 16px;
    @media screen and (min-width: 400px) {
      width: calc(${props.width} / 2);
    }
    @media screen and (min-width: 600px) {
      width: calc(${props.width} / 4);
    }
  `
);

const ButtonLess = ({ children, width = "100%", ...props }) => (
  <ButtonStyledless width={width} {...props}>
    {children}
  </ButtonStyledless>
);

export default ButtonLess;
