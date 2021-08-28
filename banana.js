var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json";
//outputDiv.innerText = " Utkarsh Gupta ";


//console.log(txtInput);

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something error has occured in the server! please try after some time");
}

function clickHandler(){
    /*console.log("clicked");
    console.log("input",txtInput.value);*/
    //outputDiv.innerText = "bleh bleh bleh bleh" +txtInput.value;
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)

