import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <button className="button" {...props}>
      <span>{props.up ? "⬆" : "⬇"}</span>
    </button>
  );
}

export default Button;
