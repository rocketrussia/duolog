import React, { useEffect, useState, useRef } from "react";
import "./StartPage.css";
import TestPage from "../test/TestPage";
import Switch from "../../components/Switch/Switch";
import Recorder from "../../components/Recorder";

const id1 = [
  "В чем разница между ключевыми словами «var», «let» и «const»?",
  "Что такое поднятие (Hoisting)?",
  "Что такое область видимости (Scope)?",
  "Что такое замыкание (Closures)?",
  "Какое значение имеет this?",
  "Что такое классы (Classes)?",
  "Для чего используется ключевое слово «new»?",
  "Что такое прототип объекта?",
  "Что такое стрелочные функции (Arrow Functions)?",
  "Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?",
  "Что такое функции высшего порядка (Higher Order Functions)?",
  "Почему функции в JS называют объектами первого класса (First-class Objects)?",
  "Что такое ECMAScript?",
  "Что нового привнес в JS стандарт ES6 или ECMAScript2015?",
  "Что нового привнесли в JS последующие стандарты ES7-ES10?",
  "Что такое распространение события (Event Propagation)?",
  "Что такое всплытие события (Event Bubbling)?",
  "Что такое погружение события (Event Capturing)?",
  "Что такое цель события или целевой элемент (event.target)?",
  "Какие приемы работы с асинхронным кодом в JS Вы знаете?",
  "Что такое функция обратного вызова (Callback Function)?",
  "Что такое промисы (Promises)?",
  "Что такое async/await?",
];

const id2 = [
  "Что такое React?",
  "Какие основные преимущества есть в React?",
  "Какие есть ограничения в React?",
  "Что такое JSX?",
  "Что такое Virtual DOM в React?",
  "Что такое Props?",
  "Что такое state и как он используется?",
  "Что такое refs в React?",
  "Что такое JEST?",
  "Когда следует использовать Class компоненты, а когда функциональные?",
  "Что происходит, когда вы вызываете setState?",
  "В чем разница между state и props?",
  "Когда следует делать асинхронные запросы на сервер в React?",
  "В чем смысл специального атрибута key?",
  "Что значит компонент mounted?",
  "Назовите разницу между контролируемым и неконтролируемым компонентом",
  "Что такое фрагменты?",
];

const id3 = [
  "Что такое алгоритм?",
  "Какие знаете типы алгоритмов?",
  "Что такое и какие знаете структуры данных?",
  "Что такое О большое (Big O)?",
  "В чем отличия стека и очереди?",
  "Какой принцип работы у связанных списков?",
  "Что такое деревья? Какие виды деревьев знаешь?",
  "Что можешь рассказать о графах?",
  "Что такое хэш таблицы?",
  "Что такое массив? Какие виды знаете?",
  "Какие виды сортировок знаете?",
];

const tests = {
  JavaScript: id1,
  React: id2,
  Algorithms: id3,
  UserTest: [],
};

// TODO: add mediaRecorder.current to StartPage by Switch

const StartPage = ({ recorder }) => {
  const [select, setSelect] = useState(null);
  const [testOn, setTestOn] = useState(false);
  const [buttonOff, setButtonOff] = useState(true);
  const [userTest, setUserTest] = useState("");
  const [withMicro, setWithMicro] = useState(false)

  const recordOn = useRef(false);

  if (testOn && !recordOn.current) {
    recorder.start();
    recordOn.current = true;
  }

  const stopRecord = () => {
    if (recordOn.current) {
      recorder.stop();
      recordOn.current = false;
    }
  };

  const displayTest = () => {
    setTestOn(true);
  };

  const handleSelect = (id) => {
    setSelect(id);
  };

  const handleTextarea = (event) => {
    setUserTest(event.target.value);
  };

  const buttonTitle = () => {
    if (select === null) return "Выбирете тест";
    return buttonOff ? "Напишите хотя бы 3 вопроса для своего теста" : null;
  };

  const handleSwitch = () => {
    withMicro ? setWithMicro(false) : setWithMicro(true)
  }

  useEffect(() => {
    if (select !== null) {
      setButtonOff(false);
    }
    tests.UserTest = userTest.split("\n");

    if (select === "UserTest" && tests.UserTest.length < 3) {
      setButtonOff(true);
    }
  }, [select, userTest]);
  return (
    <>
      {!testOn && (
        <div>
          <h3>
            Duolog
            <span
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                color: "grey",
                verticalAlign: "top",
              }}
            >
              {" "}
              Alpha
            </span>
          </h3>
          <p className="about">
            Приложение помогает подготовиться к интервью или экзамену
          </p>
          <form>
            <label>Выбери готовый тест или создай свой</label>
            <p></p>
            <select size="4">
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
                className="fade-in"
                value={userTest}
                onChange={handleTextarea}
              ></textarea>
            ) : null}
            <Switch handleSwitch={handleSwitch} />
            <p>
              <button
                type="submit"
                title={buttonTitle()}
                disabled={buttonOff}
                onClick={() => displayTest()}
              >
                Начать интервью
              </button>
            </p>
          </form>
        </div>
      )}
      {testOn && (
        <TestPage initQuestions={tests[select]} stopRecord={stopRecord} />
      )}
    </>
  );
};

export default StartPage;
