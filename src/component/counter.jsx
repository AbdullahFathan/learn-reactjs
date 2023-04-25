import { useState } from "react";

const Counter = () => {
  const [count, useCount] = useState(0);

  const handleClickAddcrement = () => {
    useCount(count + 1);
  };
  const handleClickIncrement = () => {
    useCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClickAddcrement}>
        Addcrement
      </button>
      <button
        type="button"
        onClick={handleClickIncrement}
        style={{ marginLeft: "10px" }}
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
