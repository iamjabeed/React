import React from "react";
const cooking={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color:"white",
    flexDirection:"column",
    // flex-direction: column;
    fontSize:"1.5rem",
}
const Cooking = () => {
  return (
    <div style={cooking}>
      <h1>This is cooking component</h1>
      <h2>Testing the code splitting</h2>
    </div>
  );
};

export default Cooking;
