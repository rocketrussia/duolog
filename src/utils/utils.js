export const cn = (...args) => {
  return args.reduce((acc, item) => acc + ` ${item}`);
};

export function createFileUrl(file) {
  localStorage.setItem('audio', URL.createObjectURL(file));
  console.log('stop');
}

export function getNowDate() {
  const now = new Date();
  return `${dateWithZero(now.getDate())}.${dateWithZero(
    now.getMonth()
  )}.${now.getFullYear()} ${dateWithZero(now.getHours())}:${dateWithZero(
    now.getMinutes()
  )}`;
};

function dateWithZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else return num;
}
