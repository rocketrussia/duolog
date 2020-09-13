import React from "react";
import styles from "./switch.module.css";
import {cn} from '../../utils/utils'

const Switch = ({handleSwitch}) => {
  return (
    <div className={styles.margin}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={handleSwitch} />
        <span className={cn(styles.slider, styles.round)}></span>
      </label>
      <span className={styles.description}>
        Запись с микрофона
        <span className={styles.sub}>
          <br />
          (Не забудь разрещить браузеру доступ к микрофону)
        </span>
      </span>
    </div>
  );
};

export default Switch;
