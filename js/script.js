// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// generate a random number from lower to upper
function randomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// generate a randomColor
function randomColor() {
  return "rgb(" + randomNumber(1, 256) + "," + randomNumber(1, 256) + "," + randomNumber(1, 256) + ")";
}

// get a random quote
function getRandomQuote() {
  return quotes[randomNumber(0, quotes.length - 1)];
}

// print a random quote to the passage
function printQuote() {
  var quote = getRandomQuote();
  var html = '<p class="quote">' + quote.quote + '</p>';
  if (quote.source !== undefined) {
    html += '<p class="source">' + quote.source;
    if (quote.citation !== undefined) {
      html += '<span class="citation">' + quote.citation + '</span>';
    }
    if (quote.year !== undefined) {
      html += '<span class="year">' + quote.year + '</span>';
    }
    html += '</p>';
  }
  console.log(html);
  document.getElementById('quote-box').innerHTML = html;
}

// change body background-color to a randomly selected color
document.body.style.backgroundColor = randomColor();
printQuote();
