import { useState } from "react";

const App = () => {
  //useState (cập nhật lại giá trị mới)
  const [num, setnum] = useState(1);

  const handleAdd = () => {
    setnum(num + 1);
    console.log("render");
  };

  return (
    <>
      <div className="App">
        <h2>{num}</h2>
        <button className="btn-main" onClick={handleAdd}>
          add
        </button>
      </div>
    </>
  );
};

export default App;
