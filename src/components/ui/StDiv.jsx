import React from "react";
import styled from "styled-components";

const StDiv = ({ children, ...restProps }) => {
  return <StDivContainer {...restProps}>{children}</StDivContainer>;
};

export default StDiv;

const StDivContainer = styled.div`
  display: flex;
  flex-direction: ${({ row = "row" }) => (row ? "row" : "column")};
  gap: ${({ gap }) => `${gap}px`};
`;
