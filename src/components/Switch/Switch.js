import React from "react";
import styles from "./switch.module.css";
import { cn } from "../../utils/utils";

const Switch = ({ description, sub, handleSwitch }) => {
  return (
    <div>
      <label className={styles.switch}>
        <input type="checkbox" onClick={handleSwitch} />
        <span className={cn(styles.slider, styles.round)}></span>
      </label>
      <span className={styles.description}>
        {description}
        <span className={styles.sub}>
          <br />
          {`(${sub})`}
        </span>
      </span>
    </div>
  );
};

export default Switch;
