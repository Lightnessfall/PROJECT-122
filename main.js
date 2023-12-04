

var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

function setup(){
    canvas = createCanvas(900, 600);
    canvas.position(550, 200);
}

recognition.onresult = function(event){
    console.log(event);
}