export const cn = (...args) => {
  return args.reduce((acc, item) => acc + ` ${item}`);
};

export function downloadFile(file, testName) {
  const date = () => {
    const now = new Date();
    return `${dateWithZero(now.getDate())}.${dateWithZero(
      now.getMonth()
    )}.${now.getFullYear()} ${dateWithZero(now.getHours())}-${dateWithZero(
      now.getMinutes()
    )}`;
  };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  // TODO: Bug with old name of test
  a.download = `${testName} ${date()}.wav`;
  a.click();
}

function dateWithZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else return num;
}
