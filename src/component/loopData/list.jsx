import { people as listPeople } from "../../data";
import Avatar from "../../assets/react.svg";

const People = () => {
  return (
    <div>
      {listPeople.map((data) => {
        const { id, name, nickName = "Abdullah", images } = data;
        const img = images?.[0]?.small?.url ?? Avatar;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <p>Your nickname is : {nickName}</p>
            <img src={img} alt={Avatar} style={{ width: "50px" }} />
          </div>
        );
      })}
    </div>
  );
};

export default People;
