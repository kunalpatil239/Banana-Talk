var btnTranslate = document.querySelector('#btn-translate');  //now it has reference to the button

var textInput = document.querySelector('#textInput');

btnTranslate.addEventListener('click',function clickHandler(){
    console.log(textInput.value)
})


