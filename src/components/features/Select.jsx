import React from "react";
import styled from "styled-components";
import Basic from "../ui/StDiv";
import Select from "../ui/SelectStyle";

const FeatureSelect = () => {
  return (
    <div id="one">

<Select.StSelectDiv>
        <h1>Select</h1>
        <Basic.StDiv>
          <div>
            <Select.StSelectButton>
              <div>
                리액트
              </div>
              <div>
                ▼
              </div>
            </Select.StSelectButton>
          </div>
          <div>
            <Select.StSelectButton>
              <div>
                리액트
              </div>
              <div>
                ▼
              </div>
            </Select.StSelectButton>
          </div>
        </Basic.StDiv>
      </Select.StSelectDiv>





      <Container>
        <h1>Select </h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Select.Root>
            <SelectTrigger>트리거</SelectTrigger>
            <Select.Portal>
              <OverSelectList>
                <SelectOption value="1">리액트</SelectOption>
                <SelectOption value="2">자바</SelectOption>
                <SelectOption value="3">스프링</SelectOption>
                <SelectOption value="4">리액트네이티브</SelectOption>
              </OverSelectList>
            </Select.Portal>
          </Select.Root>

          <Select.Root>
            <SelectTrigger>트리거</SelectTrigger>
            <SelectList>
              <SelectOption value="1">리액트</SelectOption>
              <SelectOption value="2">자바</SelectOption>
              <SelectOption value="3">스프링</SelectOption>
              <SelectOption value="4">리액트네이티브</SelectOption>
            </SelectList>
          </Select.Root>
        </div>
      </Container>
    </div>
  );
};

export default FeatureSelect;

const SelectTrigger = styled(Select.Trigger)`
  border: 1px solid #ddd;
  height: 40px;
  width: 300px;
  background-color: #fff;
  border-radius: 12px;
`;

const OverSelectList = styled(Select.List)`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: #fff;
  width: 300px;
  position: absolute;
  top: 650px;
`;

const SelectList = styled(Select.List)`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: #fff;
  width: 300px;
  position: absolute;
  top: 50px;
`;

const SelectOption = styled(Select.Option)`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;

  :hover {
    background-color: #eee;
  }

  :first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  :last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const Container = styled.div`
  border: 3px solid #ddd;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;


const StSelectDiv = styled.div`

  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`

const StSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`