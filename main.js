objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
    imga = loadImage('dog_cat.jpg');
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = m15.objectosDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: detectando objetos";
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  status = true;
  objectosDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    Image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for (var i = "")
    }
}