import React from "react";
import styled, { css } from "styled-components";

/* 기본 버튼 틀 */
const BasicButton = ({ children, ...restProps }) => {
  return (
    <StButton {...restProps}>
        <>{children}</>
    </StButton>
  );
};

/* PostiveButton 스타일 */
const PostiveButton = (props) => {
  return (
    <BasicButton
      {...props}
      backColor="rgb(85, 239, 196);"
      color="#rgb(0, 0, 0);"
      activeBackColor="rgb(0, 184, 148);"
    />
  );
};

/* NegativeButton 스타일 */
const NegativeButton = (props) => {
  return (
    <BasicButton
      {...props}
      backColor="rgb(250, 177, 160);"
      color="#rgb(214, 48, 49);"
      activeBackColor="rgb(225, 112, 85);"
    />
  );
};

const Postive = PostiveButton;
const Negative = NegativeButton;

const Button = { Negative, Postive };
export default Button;


const StButton = styled.button`
  border: none;
  cursor: pointer;

  border-radius: 8px;
  background-color: ${({ backColor }) => backColor};
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};

  &:active {
    background-color: ${({ activeBackColor }) => activeBackColor};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 130px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 100px;
        `;
      default:
        return css`
          height: 40px;
          width: 100px;
        `;
    }
  }}

  ${({ outlined, backColor }) => {
    if (outlined) {
      return css`
        border: 3px solid ${backColor};
        background-color: rgb(255, 255, 255);
        font-weight: 600;

        &:active {
          background-color: rgb(238, 238, 238);
        }
      `;
    }
  }}

`;


