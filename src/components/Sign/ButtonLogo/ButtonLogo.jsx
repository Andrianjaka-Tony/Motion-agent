import React from "react";
import "./ButtonLogo.sass";

const ButtonLogo = ({ icon, text, onClick = () => {} }) => {
  return (
    <div className="button_logo" onClick={onClick}>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ButtonLogo;
