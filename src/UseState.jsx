import React, { useState } from "react";
const UseStates = () => {
  //array
  const orders = [100, 200, 300]; //tính tổng đơn hàng
  const [arrays, setArrays] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total, "total");
    return total;
  });
  const handleArray = () => {
    setArrays((arrays) => arrays + 1);
  };

  // Object
  const [object, setObject] = useState({
    name: "thang",
    age: 20,
    address: "da nang",
  });
  const handleUpdate = () => {
    setObject((object) => ({
      ...object,
      code: "ffff",
    })); //c1 -> dùng thẳng callback

    //c2

    setObject({
      ...object,
      code: "ffff",
    }); //c2 -> Lấy giá trị ban đầu thêm dữ liệu mới

    //c3-> logic
    setObject((object) => {
      return {
        ...object,
        code: "ssss",
      };
    }); //c3-> logic ngan gon
  };

  return (
    <>
      {/* array */}
      <div>
        {" "}
        Array
        <h1>{arrays}</h1>
        <button onClick={handleArray}>add</button>
      </div>

      {/* object */}

      <div>
        object
        <h1>{JSON.stringify(object)}</h1>
        <button onClick={handleUpdate}>update</button>
      </div>
    </>
  );
};
export default UseStates;
