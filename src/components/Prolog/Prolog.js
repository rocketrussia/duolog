import React from "react";
import styles from "./prolog.module.css";

import logo from "../../assets/png/logo.png";
import speakingTrain from "../../assets/png/speaking-train.png";
import microphone from "../../assets/png/microphone.png";
import createTest from "../../assets/png/create-test.png";
import download from "../../assets/png/download.png";
import platforms from "../../assets/png/platforms.png";

const Prolog = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <span className={styles.alpha}>Alpha version 0.2</span>
      <p className={styles.description}>
        Приложение помогает<br></br>
        подготовиться к интервью или экзамену
      </p>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={speakingTrain} alt="Тренируй навык общения" />
          <span>
            Тренируй навыки<br></br> ответа на вопросы<br></br> вслух
            самостоятельно
          </span>
        </div>
        <div className={styles.column}>
          <img src={microphone} alt="Анализируй свои ответы" />
          <span className={styles.column}>
            Записывай диалог<br></br>
            для последующего<br></br> анализа ответов
          </span>
        </div>
        <div className={styles.column}>
          <img src={createTest} alt="Создавай свои тесты" />
          <span className={styles.column}>
            Создавай свои<br></br>
            собственные тесты<br></br> для тренировок
          </span>
        </div>
      </div>
      <div className={styles.download}>
        <img src={download} alt="Упражняйся на любой платформе" />
        <span>Скоро будет доступно для скачивания на </span>
        <img
          src={platforms}
          className={styles.platforms}
          alt="Windows, Linux, iOS, Android"
        />
      </div>
    </>
  );
};

export default Prolog;
