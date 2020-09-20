import React, {useEffect, useState} from "react";
import TestSelect from "../TestSelect/TestSelect";
import styles from "./stats.module.css";
import anim from "../../css/animations.module.css"
import {getNowDate} from "../../utils/utils"

const Stats = ({ initQuestions, wrong, right, withMicro, select }) => {
  const [restart, setRestart] = useState(false);
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  function response(getData) {
    const data = getData()
    if(data !== null) {
      setLoading(false)
      return setUrl(data)
    } else {
      setTimeout(() => response(getData), 3000)
    }
  }

  function getData() {
    return localStorage.getItem('audio')
  }

  useEffect(() => response(getData))

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
          {withMicro && loading && (
            <>
              <div className={anim.loader}></div>
              <span className={styles.marginRight}>Сохраняем запись...</span>
            </>
          )}
          {withMicro && !loading && (
            <a
              className={styles.a}
              href={url}
              download={`${select} ${getNowDate()}.wav`}
            >
              Скачать запись
            </a>
          )}
          <button className={styles.button} onClick={() => {
              setRestart(true)}
            }
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
