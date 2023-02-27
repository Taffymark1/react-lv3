import styled from "styled-components";


// const Select = { StSelectDiv, StSelectButton};

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

// export default Select;
export default { StSelectDiv, StSelectButton};