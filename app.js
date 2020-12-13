var btnTranslate = document.querySelector('#btn-translate');  //now it has reference to the button

var textInput = document.querySelector('#textInput');
var output = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
     return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.lof("error occured");
}

function clickHandler(){
    var inputText = textInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        translatedText = json.contents.translated;
        output.innerText = translatedText
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener('click', clickHandler);


