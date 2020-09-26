import React from "react";
import anim from "../../css/animations.module.css";

const Spinner = ({ text }) => {
  return (
    <>
      <div className={anim.loader}></div>
      <span>{text}</span>
    </>
  );
};

export default Spinner;
