const pressedArr = [];
const secredCode = "kikac";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressedArr.push(e.key);
  pressedArr.splice(
    -secredCode.length - 1,
    pressedArr.length - secredCode.length
  );
  if (pressedArr.join("").includes(secredCode)) {
    console.log("Congratulations you find the secret code!!!");
    cornify_add();
  }
  console.log(pressedArr);
});
