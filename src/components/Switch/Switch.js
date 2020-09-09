import React from "react";
import "./Switch.css";

const Switch = ({handleSwitch}) => {
  return (
    <div className="margin">
      <label className="switch">
        <input type="checkbox" onClick={handleSwitch} />
        <span className="slider round"></span>
      </label>
      <span className="description">
        Запись с микрофона
        <span className="sub">
          <br />
          (Не забудь разрещить браузеру доступ к микрофону)
        </span>
      </span>
    </div>
  );
};

export default Switch;
