if(document.readyState === "complete") {
// Checking the letter that is typed.
function checkKey(t) {
  typed = String.fromCharChode(t.which);
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].innerHTML === typed) {
      if (spans[i].classList.contains("bg")) {
        continue;
        } else if (spans[i].classList.contains("bg") === false
          && spans[i-1] === undefined
          || spans[i-1].classList.contains("bg") !== false) {
          spans[i].classList.add("bg");
          break;
        }
      }
    }
  var checker = 0;
  for (var j = 0; j < spans.length; j++) {
    if (spans[j].className === "span bg") {
      checker++;
    }
    if (checker === spans.length) {
      points++;
      score.innerHTML = points;
    }
  }
};
button.addEventListener("click", function(t) {
    countdown();
    random();
    button.disabled = true;
    document.addEventListener("keydown", checkKey, false);
  });
}
