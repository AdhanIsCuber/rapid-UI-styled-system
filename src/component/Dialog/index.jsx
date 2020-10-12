import React from "react";
import { system } from "styled-system";
import styled from "styled-components";

const overlaySystem = system({
  back: {
    property: "backgroundColor",
    scale: "colors",
    defaultScale: "blue"
  },
  blur: {
    property: "filter",
    defaultScale: "blur(2px)"
  }
});

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${overlaySystem}
`;

const dialogSystemConfig = {
  rounded: {
    property: "borderRadius",
    defaultScale: "16px"
  },
  size: {
    properties: ["width", "height"]
  }
};

dialogSystemConfig.sz = dialogSystemConfig.size;

const dialogSystem = system(dialogSystemConfig);

const DialogStyled = styled.div`
  background-color: white;
  padding: 16px;
  z-index: 2;
  ${dialogSystem}
`;

const Dialog = ({ children, isOpen, onClose, ...props }) => (
  <>
    {isOpen && (
      <Overlay {...props} onClick={onClose}>
        <DialogStyled sz="400px" {...props}>
          {children}
        </DialogStyled>
      </Overlay>
    )}
  </>
);

export default Dialog;
