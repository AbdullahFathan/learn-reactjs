import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book jobs="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg"
        alt="Dog Man: Twenty Thousand Fleas Under the Sea"
      />
      <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {" "}
        Dav Pilkey{" "}
      </h4>
      <p>{props.jobs}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
