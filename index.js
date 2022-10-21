let username = prompt("enter username: ")
var point = 0
let guessNumber = prompt("enter number between 1 and 2: ");
let random = Math.floor(Math.random() * 2) + 1;
console.log("the guess is: " + random);
if (guessNumber == random) {
  console.log("correct");
  point += 1
  console.log("you point is: " + point)
}
else {
  console.log("wrong");
}

while (guessNumber == random) {
  console.log("stage 2")
  guessNumber = prompt("enter number between 1 and 3: ");
  random = Math.floor(Math.random() * 3) + 1;
  console.log("the guess is: " + random) ;
  if (guessNumber == random) {
    console.log("correct") ;
    point += 1
    console.log("you point is: " + point)
  }
  else {
    console.log("wrong");
  }
  break;
}
console.log("task complete")

