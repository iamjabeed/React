import React from "react";
import ReactDOM from "react-dom/client";
const para = React.createElement("p", { id: "para" }, "Hello from react js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);

// const hello1 = React.createElement("h1", { id: "heading" }, "Hello World 1");
// const hello2 = React.createElement("h1", { id: "heading" }, "Hello World 2");
// const container = React.createElement("div", { id: "container" }, [
//     hello1,
//   hello2,
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
