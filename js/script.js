// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// generate a random number from 1 to 256
function randomNumber() {
  return Math.floor(Math.random() * 256) + 1;
}

// generate a randomColor
function randomColor() {
  return "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
}

// change body background-color to a randomly selected color
document.body.style.backgroundColor = randomColor();
