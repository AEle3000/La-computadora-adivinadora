grueso2=10
console.log(grueso2)
function preload() {
classifier=ml5.imageClassifier("DoodleNet");
}

function setup() {

var canvas=createCanvas(
    300, 300
);
canvas.center();
background("white");
canvas.mouseReleased(adivinar)
}

function draw() {
    grueso2=document.getElementById("entradatexto").value
    console.log(grueso2)
strokeWeight(grueso2);
stroke(0)
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
}
}

function borrar() {
    background("white")
}

function adivinar() {
    classifier.classify(canvas, resultados)
}

function resultados(error, datos) {
    if(error) {
        console.log(error)
    }
    console.log(datos)
    document.getElementById("objeto").innerHTML="Nombre: "+datos[0].label;
    document.getElementById("confianza").innerHTML="Confianza: "+Math.round(datos[0].confidence*100)+"%";
}