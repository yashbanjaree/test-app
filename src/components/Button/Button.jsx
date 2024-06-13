import React, { useState } from "react";
import "./Button.css";


function Button() {
  const [name, setName] = useState("");

  const disName = () => {
    setName("Pushkar");
  };

  return (
    <div>
      <button className="btn" onClick={disName}>
        Click Here!
      </button>
      <p>{name}</p>
    </div>
  );
}

export default Button;
