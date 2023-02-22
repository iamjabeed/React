import React from "react";
import ReactDOM from "react-dom/client";

// const para = React.createElement("p", { id: "para", key: "22" }, "Hello from react js");
// console.log("hello");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(para);

// const hello1 = React.createElement
// ("h1",
//  { id: "heading", key: "div"},
//   "Hello World 1"
//   );
// const hello2 = React.createElement(
//   "h2",
//   { id: "heading", key: "h2" },
//    "Hello World 2"
//    );
// const container = React.createElement(
//   "div",
//    { id: "container", key: "h2"},
//   [hello1,hello2]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

//* JSX
// const heading = <h1>Hello from JSx h1</h1>;

//* react element
const element = (
  <div>
    <h1>Hello from JSX h1</h1>
    <h2>Hello from JSX h2</h2>
    <h3>Hello from JSX h3</h3>
    {/* <Header /> */}
  </div>
);

//? functional component
const Header = () => {
  return (
    <>
      <div>
        <h1>LOGO</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {element}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
