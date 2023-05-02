import useToogle from "./usetoogle";

const ToggleExample = () => {
  const { show, toogle } = useToogle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toogle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
