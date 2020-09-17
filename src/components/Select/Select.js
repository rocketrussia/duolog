import React, {useState} from "react";
import tests from "../../services/tests";

import styles from './select.module.css'
import anim from "../../css/animations.module.css";

const placeholder = `Напишите вопросы для прохождения интервью
Каждый вопрос с новой строки`

const Select = ({ select, userTest, handleSelect, handleTextarea }) => {
  const [selected, setSelected] = useState('0')

  function handleSelected(key) {
    handleSelect(key)
    setSelected(key)
  }

  return (
    <>
      <label>Выбери готовый тест или создай свой</label>
      <p></p>
      <ul>
        {Object.keys(tests).map((key, index) => (
          <li
            className={selected === key ? styles.selected : ''}
            onClick={() => handleSelected(key)}
            key={index}>
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
