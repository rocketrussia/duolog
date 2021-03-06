export const cn = (...args) => {
  return args.reduce((acc, item) => acc + ` ${item}`);
};

export function synthQuestion(lang, text) {
  const msg = new SpeechSynthesisUtterance();
  msg.rate = 1;
  msg.lang = lang;
  msg.text = text
  window.speechSynthesis.speak(msg);
}

export function createFileUrl(file) {
  localStorage.setItem("audio", URL.createObjectURL(file));
}

export function getNowDate() {
  const now = new Date();
  return `${dateWithZero(now.getDate())}.${dateWithZero(
    now.getMonth()
  )}.${now.getFullYear()} ${dateWithZero(now.getHours())}:${dateWithZero(
    now.getMinutes()
  )}`;
}

function dateWithZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else return num;
}
