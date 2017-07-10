// subset of the total number of quotes
var quotesSub = [];

// page refresher timer in milliseconds
var timer = 30000;

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
  // when quotesSub is empty, reload it with all quotes
  if (quotesSub.length === 0) {
    for (var i = 0; i < quotes.length; i += 1) {
      quotesSub.push(quotes[i]);
    }
  }
  // remove a randomly selected quote from quotesSub & return it
  return quotesSub.splice([randomNumber(0, quotesSub.length - 1)], 1)[0];
}

// print a random quote to the passage
function printQuote() {
  // change body background-color to a randomly selected color
  document.body.style.backgroundColor = randomColor();
  var quote = getRandomQuote();
  var html = '<p class="quote">' + quote.quote + '</p>';
  // only include existing quote properties
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

// refresh quote after a specified amount of time
setInterval(function(){ printQuote(); }, timer);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
