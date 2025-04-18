import React, { useState } from "react";
const FormInput = () => {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");

  const handlesubmit = () => {};

  const handleOnchangeName = (eventName) => {
    setName(name);
    console.log(eventName);
  };
  const handleOnchangeAddress = (eventAddrees) => {
    setAdress(address);
    console.log(eventAddrees);
  };
  return (
    <>
      <div>Form Login</div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => handleOnchangeName(e.target.value)}
      />
      <label htmlFor="">Address</label>
      <input
        type="text"
        onChange={(e) => handleOnchangeAddress(e.target.value)}
      />
      <button onClick={handlesubmit}></button>
    </>
  );
};
export default FormInput;
