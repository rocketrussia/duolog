export function downloadFile(file) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = "duolog-mic.wav";
  a.click();
}
