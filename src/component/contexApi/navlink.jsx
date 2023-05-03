import UserContainer from "./user_container";

const Navlink = () => {
  return (
    <div className="nav-container">
      <ul className="nav-link">
        <a href="#">Home</a>
      </ul>
      <ul className="nav-link">
        <a href="#">About</a>
      </ul>
      <UserContainer />
    </div>
  );
};

export default Navlink;
