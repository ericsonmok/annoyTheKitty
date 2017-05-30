var highlight;
var typed;
var points = 0;
var seconds = 122;
var time = document.querySelector(".time");
var timerDiv = document.querySelector(".time");
var button = document.querySelector("button");
var score = document.querySelector(".score");
var word = document.querySelector(".word");

function checkKey(t) {
  typed = String.fromCharChode(t.which);
  for (var i = 0; i < highlight.length; i++) {
    if (highlight[i].innerHTML === typed) {
      if (highlight[i].classList.contains("bg")) {
        continue;
      } else if (highlight[i].classList.contains("bg") === false && highlight[i-1] === undefined
      || highlight[i-1].classList.contains("bg") !== false) {
        highlight[i].classList.add("bg");
        break;
        }
      }
    }
  var checker = 0;
  for (var j = 0; j < highlight.length; j++) {
    if (highlight[j].className === "span bg") {
      checker++;
    }
    if (checker === highlight.length) {
      points++;
      score.innerHTML = points;
    }
  }
};
button.addEventListener("click", function(t) {
    countdown();
    random();
    button.disabled = true;
  });
button.addEventListener("click", function(t) {
    countdown();
    random();
    button.disabled = true;
    document.addEventListener("keydown", checkKey, false);
  });
