import React, { useEffect, useState } from "react";
import tests from "../../services/tests";

import styles from "./select.module.css";
import {useTranslation} from 'react-i18next';

const Select = ({ select, userTest, handleSelect, handleTextarea }) => {
  const { t } = useTranslation();
  const initKey = Object.keys(tests)[0];
  const length = Object.keys(tests).length;
  const [selected, setSelected] = useState(initKey);

  const placeholder = `${t('testSelect.userQuestions')}
${t('testSelect.newLine')}`;

  function handleSelected(key) {
    handleSelect(key);
    setSelected(key);
  }

  function selectedStyle(key, index) {
    if (selected === key) {
      if (index === 0) return styles.selectedFirst;
      if (index === length - 1) return styles.selectedLast;
      return styles.selected;
    }
  }

  useEffect(() => {
    handleSelect(initKey);
    selectedStyle(initKey, 0);
  }, []);

  return (
    <>
      <label className={styles.label}>{t('testSelect.chooseTest')}</label>
      <p></p>
      <ul className={styles.ul}>
        {Object.keys(tests).map((key, index) => (
          <li
            className={selectedStyle(key, index)}
            onClick={() => handleSelected(key)}
            key={index}
          >
            {key === "UserTest" ? t('testSelect.createTest') : key}
          </li>
        ))}
      </ul>
      <p></p>
      {select === "UserTest" ? (
        <textarea
          id="questions"
          name="questions"
          rows="5"
          wrap="off"
          placeholder={placeholder}
          className={styles.textarea}
          value={userTest}
          onChange={handleTextarea}
        ></textarea>
      ) : null}
    </>
  );
};

export default Select;
