import React, { useState } from "react";
import StDiv from "../ui/StDiv";
import Button from "../ui/ButtonStyle";
import Input from "../ui/InputStyle";

const FeatureInput = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  // test
  const onSubmitHandler = (e) => {
    e.preventDefault();

    Object.values(form).filter((element) => element !== "").length === 0
      ? window.alert("이름과 가격 모두 입력해주세요.")
      : window.alert(`{ name: ${form.name}, price: ${form.price} }`);
  };

  return (
    <>
      <h1>Input</h1>
        <form onSubmit={onSubmitHandler}>
          <Input.StInputDiv>
            <div>
              <label>이름</label>
              <Input.StInput 
                getValues={(v) => setForm((element) => ({ ...element, name: v }))}
              />
            </div>
            <div>
              <label>가격</label>
              <Input.StInput
                getValues={(v) => setForm((element) => ({ ...element, price: v.raw }))}
              />
            </div>
            <Button.StSmall>저장</Button.StSmall>
          </Input.StInputDiv>
        </form>
    </>
  );
};

export default FeatureInput;
