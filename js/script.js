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

// print a random quote to the passage
function printQuote() {
  var i = 12;
  var html = '<p class="quote">' + quotes[i].quote + '</p>';
  if (quotes[i].source !== undefined) {
    html += '<p class="source">' + quotes[i].source;
    if (quotes[i].citation !== undefined) {
      html += '<span class="citation">' + quotes[i].citation + '</span>';
    }
    if (quotes[i].year !== undefined) {
      html += '<span class="year">' + quotes[i].year + '</span>';
    }
    html += '</p>';
  }
  console.log(html);
  document.getElementById('quote-box').innerHTML = html;
}

// change body background-color to a randomly selected color
document.body.style.backgroundColor = randomColor();
printQuote();
