export const id1 = [
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

export const id2 = [
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

export const id3 = [
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

export const id4 = [
  "What is Hoisting?",
  "What is Hoisting?",
  "What is Scope?",
  "What are Closures?",
  `What's the value of «this» in JavaScript?`,
  "What are Classes?",
  "What does the «new» keyword do?",
  "What is the prototype of an object?",
  "What are Arrow functions?",
  "What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?",
  "What are Higher Order Functions?",
  "Why are functions called First-class Objects?",
  "What is ECMAScript?",
  "What are the new features in ES6 or ECMAScript 2015?",
  "What are the new features in ES7-ES10?",
  "What is Event Propagation?",
  "What's Event Bubbling?",
  "What's Event Capturing?",
  "What is «event.target»?",
  "What are the ways to deal with Asynchronous Code in JavasScript?",
  "What is a Callback function?",
  "What are Promises?",
  "What is async/await and How does it work?",
];

export const id5 = [
  "What is React?",
  "What are the features of React?",
  "What are the limitations of React?",
  "What is JSX?",
  "What do you understand by virtual DOM? Explain its working.",
  "What is Props?",
  "What is a state in React and how is it used?",
  "What do you understand by refs in React?",
  "What is JEST?",
  "When to use Class components, and when to use Functional?",
  "What happens when you call setState?",
  "Differentiate between states and props.",
  "When to make asynchronous requests to the server in react?",
  "What is the significance of keys in React?",
  "What does component mounted?",
  "Differentiate between stateful and stateless components",
  "What is React fragments?",
];

export const id6 = [
  "What is algorithms?",
  "What types of algorithms do you know?",
  "What is and what data structures do you know?",
  "What is Big O?",
  "What are the differences between stack and queue?",
  "How does linked lists work?",
  "What are trees? What types of trees do you know?",
  "What can you tell us about graphs?",
  "What are hash tables?",
  "What is an Array? What types do you know?",
  "What types of sorting do you know?",
];

const testsRu = {
  JavaScript: id1,
  React: id2,
  Алгоритмы: id3,
  UserTest: [],
};

const testsEn = {
  JavaScript: id4,
  React: id5,
  Algorithms: id6,
  UserTest: [],
};

function getTests(lang) {
  if(lang === 'en') return testsEn
  else return testsRu
}

export default getTests;
