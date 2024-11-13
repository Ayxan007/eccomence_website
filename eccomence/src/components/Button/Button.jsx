import React from "react";

function Button({ icon, text }) {
  return (
    <button className="header-button">
      <svg className="header-icon" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
      {text}
    </button>
  );
}

export default Button;