var inputValue=document.querySelector("#content");
var btn=document.querySelector("#btn-translate");

var serverURL="https://api.funtranslations.com/translate/minion.json";
function translation(txt){
return serverURL+"?"+"text="+txt;
}

function Output(banana){
    return document.querySelector("#output-box").innerText=banana;
}
btn.addEventListener('click',clickHandler);

function clickHandler(){
    var result=inputValue.value;
    fetch(translation(result))
    .then(response=>response.json())
    .then(json=> {
     console.log(json);
        Output(json.contents.translated)})

}
JSON.stringify