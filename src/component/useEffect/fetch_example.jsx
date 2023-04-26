import { useState, useEffect } from "react";

const URL = "https://api.github.com/users";

const fetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Github User</h2>
      <ul className="users">
        {data.map((item) => {
          const { id, login, avatar_url, html_url } = item;

          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default fetchApi;
