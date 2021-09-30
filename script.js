var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input");

var translateAPI =
  "https://api.funtranslations.com/translate/mandalorian.json?text=";
  
function errorHandler(error) {
  console.log("The error is: ", error);
  alert("There is some problem right now. Please try later!");
}
function clickHandler() {
  fetch(translateAPI + inputText.value)
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);