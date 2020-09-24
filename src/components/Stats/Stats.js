import React, { useEffect, useState } from "react";
import TestSelect from "../TestSelect/TestSelect";
import styles from "./stats.module.css";
import { getNowDate } from "../../utils/utils";
import {useTranslation} from 'react-i18next';

const Stats = ({
  initQuestions,
  wrong,
  right,
  withMic,
  select,
  stopRecorder,
}) => {
  const { t } = useTranslation();
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
          <h2>{t('stats.thanksForTime')}</h2>
          <p>
            {t('stats.answered')}: {right.length} / {initQuestions.length}{" "}
          </p>
          <p>
            {t('stats.notAnswered')}: {wrong.length} / {initQuestions.length}:{" "}
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
              {t('buttons.downloadRecording')}
            </a>
          )}
          <button
            className={styles.button}
            onClick={() => {
              setRestart(true);
            }}
          >
            {t('buttons.backToTests')}
          </button>
        </div>
      )}
      {restart && <TestSelect />}
    </>
  );
};

export default Stats;
