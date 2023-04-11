import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Dav Pilkey",
  title: "Dog Man: Twenty Thousand Fleas Under the Sea",
  img: "https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg",
};

const secondBook = {
  author: "Peter Attia MD",
  title: "Outlive: The Science and Art of Longevity ",
  img: "https://m.media-amazon.com/images/I/411pTpK1xOL._SX383_BO1,204,203,200_.jpg",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        img={firstBook.img}
        title={firstBook.title}
      />
      <Book
        author={secondBook.author}
        img={secondBook.img}
        title={secondBook.title}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="Dog Man: Twenty Thousand Fleas Under the Sea" />
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
