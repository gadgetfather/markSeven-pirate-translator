var btnTranslate = document.querySelector("#translate-btn");
var txtInput = document.querySelector("#og-text")
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationUrl(text) {
    return serverURL + "?" +"text="+ text
}

function errorHandler(error){
    console.log("error is here", error)
    alert("Something wrong with server try again later!")
}



function clickHandler() {

    
    var Inputtext = txtInput.value
    fetch(getTranslationUrl(Inputtext))
        .then(response => response.json())
        .then(json => {var translatedText = json.contents.translated
            outputDiv.innerText = translatedText
            })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)