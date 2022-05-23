import React from "react";

let Button = ({  className, outline, children }) => {
  return (
    <button
      className={`button ${className} ${outline ? "button--outline" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
