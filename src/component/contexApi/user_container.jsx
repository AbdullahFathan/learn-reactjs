import { useContext } from "react";
import { NavbarContex } from "./navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContex);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name} </p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
