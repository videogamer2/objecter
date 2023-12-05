//https://teachablemachine.withgoogle.com/models/ZFnyFMyf9/
Webcam.set({
    width: 500,
    height: 290,
    image_format: "png",
    png_quality: 90
});
var cam = document.getElementById("camera");

Webcam.attach(cam);

function takeSnapshot(){
    Webcam.snap(function(dataURI){
        document.getElementById("result").innerHTML = "<img id='myphoto' src="+dataURI+">";
    });
}

console.log("versão ml5: ", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZFnyFMyf9/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelo inicializado zzzzzzzz");
}

function check(){
    var camila = document.getElementById("myphoto");
    classifier.classify(camila, onresult);
}
function onresult(error, results){
    if(error){
        console.error(error + " (deu bosta)");
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = (results[0].confidence.toFixed(2))*100+"%";
    }
}