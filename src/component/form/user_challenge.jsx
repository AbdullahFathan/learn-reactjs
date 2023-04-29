import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [arrayData, setArrayData] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;

    const newData = { id: Date.now(), name: name };
    const newArrayData = [...arrayData, newData];
    setArrayData(newArrayData);

    setName("");
  };

  const removeItem = (id) => {
    const newArray = arrayData.filter((person) => person.id !== id);
    setArrayData(newArray);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div>
        {arrayData.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <h5>id: {id}</h5>
              <button
                type="button"
                className="btn"
                onClick={() => removeItem(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
