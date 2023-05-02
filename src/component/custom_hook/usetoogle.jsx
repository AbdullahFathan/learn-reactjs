import { useState } from "react";

const useToogle = (defultValue) => {
  const [show, setShow] = useState(defultValue);
  const toogle = () => {
    setShow(!show);
  };
  return { show, toogle };
};

export default useToogle;
