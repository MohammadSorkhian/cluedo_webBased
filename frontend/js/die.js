

var imported = document.createElement('script');
imported.src = 'https://unpkg.com/konva@7.0.3/konva.min.js';
document.head.appendChild(imported);

var dieCanvas = document.getElementById("dieCanvas");
var context = dieCanvas.getContext("2d");


const newLocal = 480;
dieCanvas.style.x = newLocal;
dieCanvas.style.y = newLocal;

context.canvas.width  = 600;
context.canvas.height = 600;

context.shadowBlur = 20;
context.shadowColor = "white";
context.fillStyle = "#8a3760";

const rectX = 0;
const rectY = 0;
const rectWidth = 80;
const rectHeight = 90;

context.fillRect(rectX, rectY, rectWidth, rectHeight);


// Create gradient
var grd = context.createLinearGradient(0,0,2000,2000);
grd.addColorStop(0,"white");
grd.addColorStop(1,"crimson");
// Fill with gradient
context.fillStyle = grd;
//context.fillRect(0,0,1100,1100);

//rolldie();

//setInterval(rolldie,1000);


//get random value between 1 and 6(inclusive)
var dieValue = Math.floor(Math.random()*6) + 1; 

displayDieValue();


function displayDieValue(){
    
    let x = (rectWidth - rectX)/2 + rectX;
    let y = (rectHeight - rectY)/2 + rectY + 10;

    context.font = "50px Comic Sans MS";
    context.fillStyle = "red";
    context.textAlign = "center";
    context.fillText(dieValue, x, y);
}

var startIndex = 1;

function rolldie(){

    //console.log('Hola');
    //context.clearRect(0, 0, dieCanvas.width, dieCanvas.height);
    
    //Convert degrees to radian 
    var rad = (10*startIndex) * Math.PI / 180;
   
    //Rotate the canvas around the origin
    //context.rotate(rad);

    context.shadowBlur = 20;
    context.shadowColor = "white";
    context.fillStyle = "#8a3760";

    dieCanvas.style.transform = "scaleX(-1)";
    //context.fillRect(0, 0, 80, 90);
    startIndex++;
    if(startIndex = 4){
        startIndex = 1;
    }

}
  