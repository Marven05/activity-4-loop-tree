for (let row = 0; row < 10; row++) {
  let line = "<br>";
  for (let col = 0; col <= row; col++) {
      line += '*';
  }
  document.write(line);
}

for (let row = 0; row < 10; row++) {
  let line = " ";
  for (let col = 0; col <= row; col++) {
      line += '*';
  }
  console.log(line);
}