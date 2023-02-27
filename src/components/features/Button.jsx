import React from "react";
import StDiv from "../ui/StDiv";
import Button from "../ui/ButtonStyle";
import { IconArrow, IconBell } from "../ui/Icon";
import styled from "styled-components";

const FeatureButton = () => {
  return (
    <StDiv row={false} gap={10}>
        <h1>Button</h1>
        <StDiv gap={10}>
            <Button.Postive 
                size="large"
                outlined
                onClick={() => window.alert("버튼을 만들어보세요")}>
                <ButtonContainer>
                    Large Primary Button
                    <IconArrow />
                </ButtonContainer>
            </Button.Postive>
            <Button.Postive size="medium">Medium</Button.Postive>
            <Button.Postive>Small</Button.Postive>
        </StDiv>
        
        <StDiv gap={10}>
            <Button.Negative 
                size="large"
                outlined
                onClick={() => console.log(window.prompt("어렵나요?"))}>
                <ButtonContainer>
                    Large Negative Button
                    <IconBell />
                </ButtonContainer>
            </Button.Negative>
            <Button.Negative>Medium</Button.Negative>
            <Button.Negative>Small</Button.Negative>
        </StDiv>
    </StDiv>
  );
};

export default FeatureButton;


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
