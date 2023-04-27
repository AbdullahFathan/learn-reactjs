import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [state, setState] = useState("");
  //Truthly
  const [name, setName] = useState("Fathan");

  return (
    <div>
      <h2>Falsy OR: {state || "won't work"}</h2>
      <h2>Falsy And: {state && "won't work"}</h2>
      <h2>Truthly OR: {name || "won't work"}</h2>
      <h2>Truthly And: {name && "won't work"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
