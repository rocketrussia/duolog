import React from 'react';
import tests from '../../services/tests';
import anim from '../../css/animations.module.css'

const Select = ({select, userTest, handleSelect, handleTextarea}) => {
  return (
    <>
      <label>Выбери готовый тест или создай свой</label>
      <p></p>
      <select
        className="form-control"
        size="4"
      >
        {Object.keys(tests).map((key, index) => (
          <option onClick={() => handleSelect(key)} key={index}>
            {key === "UserTest" ? "Создать свой тест" : key}
          </option>
        ))}
      </select>
      <p></p>
      {select === "UserTest" ? (
        <textarea
          id="questions"
          name="questions"
          rows="20"
          wrap="off"
          placeholder="Напишите вопросы для прохождения интервью
    Каждый вопрос с новой строки"
          className={anim.fadeIn}
          value={userTest}
          onChange={handleTextarea}
        ></textarea>
      ) : null}
    </>
  )
}

export default Select