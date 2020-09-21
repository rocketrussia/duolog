import React, { useEffect, useState } from "react";
import TestSelect from "../TestSelect/TestSelect";
import styles from "./stats.module.css";
import { getNowDate } from "../../utils/utils";

const Stats = ({
  initQuestions,
  wrong,
  right,
  withMic,
  select,
  stopRecorder,
}) => {
  const [restart, setRestart] = useState(false);
  const [url, setUrl] = useState(null);

  function getUrl() {
    return localStorage.getItem("audio");
  }

  useEffect(() => {
    stopRecorder();

    setTimeout(() => {
      setUrl(getUrl());
    }, 0);
  }, []);

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
          {withMic && (
            <a
              className={styles.a}
              href={url}
              download={`${select} ${getNowDate()}.wav`}
            >
              Скачать запись
            </a>
          )}
          <button
            className={styles.button}
            onClick={() => {
              setRestart(true);
            }}
          >
            Вернуться к выбору тестов
          </button>
        </div>
      )}
      {restart && <TestSelect />}
    </>
  );
};

export default Stats;
