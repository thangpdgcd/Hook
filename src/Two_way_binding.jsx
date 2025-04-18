import React from "react";
import { useState } from "react";

///Two-way binding Ràng buộc hai chiều

const Mathrandom = () => {
  const array = ["Laptop", "Pc", "Table"];

  const [gift, setGift] = useState(0);

  const handleMathrandom = () => {
    const total = Math.floor(Math.random() * array.length);
    //mathfloor lấy số nguyên
    //mathrandom lấy số thực

    setGift(array[total]);
    console.log(array[total]);
  };

  return (
    <>
      <div>Math ramdom</div>
      <h1>{gift || "chưa lấy phần thưởng"}</h1>
      <button className="btn-main" onClick={handleMathrandom}>
        Get
      </button>
    </>
  );
};
export default Mathrandom;
