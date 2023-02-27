import styled from "styled-components";

// const Input = { StInputDiv, StInput };

const StInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StInput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  :focus {
    box-shadow: 0 0 0 1px #000;
  }
`;

// export default Input;
export default {StInputDiv, StInput};