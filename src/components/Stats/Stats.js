import React, { useState } from "react";
import TestSelect from "../TestSelect/TestSelect";
import styles from "./stats.module.css";
import {cn, getNowDate} from "../../utils/utils"

const Stats = ({ initQuestions, wrong, right, withMicro, select }) => {
  const [restart, setRestart] = useState(false);
  const url = localStorage.getItem('audio')
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
          {withMicro && (
            <a
              className={styles.a}
              href={url}
              download={`${select} ${getNowDate()}.wav`}
            >
              Скачать запись
            </a>
          )}
          <span className={styles.button} onClick={() => setRestart(true)}>
            Вернуться к выбору тестов
          </span>
        </div>
      )}
      {restart && <TestSelect />}
    </>
  );
};

export default Stats;
