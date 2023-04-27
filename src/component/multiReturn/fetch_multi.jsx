import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setLoading] = useState(true);
  const [isEror, setEror] = useState(false);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const respone = await fetch(url);
      const json = await respone.json();
      setUser(json);
    } catch (error) {
      console.log(error);
      setEror(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  if (isEror) {
    return <h2>There is a eror 404</h2>;
  }

  const { login, avatar_url, bio } = user;

  return (
    <div>
      <img src={avatar_url} alt={login} style={{ borderRadius: "50%" }} />
      <h2>{login}</h2>
      <h4>{bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
