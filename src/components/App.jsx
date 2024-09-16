import React, { useState } from "react";

function App() {
  const [oldColor, newColor] = useState("white");
  function over() {
    newColor("black");
  }
  function out() {
    newColor("white");
  }
  return (
    <div className="container">
      <h1 className="">Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: oldColor }}
        onMouseOver={over}
        onMouseOut={out}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
