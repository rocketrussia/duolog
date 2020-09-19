import React, { useState } from "react";
import TestSelect from "../TestSelect/TestSelect";
import styles from "./stats.module.css";

const Stats = ({ initQuestions, wrong, right, voiceUrl }) => {
  const [restart, setRestart] = useState(false);
  return (
    <>
      {!restart && (
        <div className="app">
          <h2>Спасибо за уделенное время!</h2>
          <p>
            Ответил: {right.length} / {initQuestions.length}{" "}
          </p>
          <p>
            Не дал ответа: {wrong.length} / {initQuestions.length}:{" "}
          </p>
          <ol>
            {wrong.map((noanswer, index) => (
              <li className={styles.li} key={index}>
                {noanswer}
              </li>
            ))}
          </ol>
          {voiceUrl && (
            <button
              className={styles.download}
              href={voiceUrl}
              download="duolog-mic.wav"
            >
              Скачать запись
            </button>
          )}
          <button className={styles.button} onClick={() => setRestart(true)}>
            Вернуться к выбору тестов
          </button>
        </div>
      )}
      {restart && <TestSelect />}
    </>
  );
};

export default Stats;
