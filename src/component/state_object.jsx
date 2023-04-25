import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "fathan",
    age: 22,
    hobby: "Coding",
  });

  const displayPerson = () => {
    setPerson({
      ...person,
      name: "Abdullah",
    });
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Hobby: {person.hobby}</h4>

      <button type="button" onClick={displayPerson}>
        Show Name
      </button>
    </div>
  );
};

export default UseStateObject;
