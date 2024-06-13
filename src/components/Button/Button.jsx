import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [name, setName] = useState(false);

  const disName = () => {
    setName(!name);
  };

  return (
    <div>
      <button className="btn" onClick={disName}>
      {name ? "Hide Pushkar" : "Show Pushkar"}
      </button>
      {name && <p>Pushkar</p>}
    </div>
  );
}

export default Button;