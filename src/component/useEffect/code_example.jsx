import { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello from sayHello");
  };

  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;

// function Example() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       const json = await response.json();
//       setData(json);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>To-do List</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Example;
