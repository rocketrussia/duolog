import React, {useEffect, useState} from "react";
import tests from "../../services/tests";

import styles from "./select.module.css";
import anim from "../../css/animations.module.css";

const placeholder = `Напишите вопросы для прохождения интервью
Каждый вопрос с новой строки`;

const Select = ({ select, userTest, handleSelect, handleTextarea }) => {
  const initKey = Object.keys(tests)[0]
  const length = Object.keys(tests).length;
  const [selected, setSelected] = useState(initKey);

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
    handleSelect(initKey)
    selectedStyle(initKey, 0)
  }, [])

  return (
    <>
      <label>Выбери готовый тест или создай свой</label>
      <p></p>
      <ul>
        {Object.keys(tests).map((key, index) => (
          <li
            className={selectedStyle(key, index)}
            onClick={() => handleSelected(key)}
            key={index}
          >
            {key === "UserTest" ? "Создать свой тест" : key}
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
          className={anim.fadeIn}
          value={userTest}
          onChange={handleTextarea}
        ></textarea>
      ) : null}
    </>
  );
};

export default Select;
