import { useState } from "react";

const ArrayState = () => {
  const [arrayFood, setArray] = useState([
    { id: 1, name: "Nasi Kebuli" },
    { id: 2, name: "Nasi Kuning" },
    { id: 3, name: "Nasi Uduk" },
    { id: 4, name: "Nasi Goreng" },
  ]);

  const removeSingleItem = (id) => {
    const newArrayFood = arrayFood.filter((food) => food.id !== id);
    setArray(newArrayFood);
  };
  const removeAllItem = () => {
    setArray([]);
  };
  return (
    <div>
      {arrayFood.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <button
            type="button"
            style={{
              marginRight: "10px",
            }}
            onClick={() => removeSingleItem(data.id)}
          >
            Remove This Food
          </button>
        </div>
      ))}
      <button
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={removeAllItem}
      >
        Remove All Food
      </button>
    </div>
  );
};

export default ArrayState;
