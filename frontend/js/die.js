
var imported = document.createElement('script');
imported.src = 'https://unpkg.com/konva@7.0.3/konva.min.js';
document.head.appendChild(imported);

var dieCanvas = document.getElementById("dieCanvas");
var context = dieCanvas.getContext("2d");


const newLocal = 0;
dieCanvas.style.x = newLocal;
dieCanvas.style.y = newLocal;

context.canvas.width  = 150;
context.canvas.height = 100;

context.shadowBlur = 20;
context.shadowColor = "white";
context.fillStyle = "#f5de0cfd";

const rectX = 0;
const rectY = 0;
const rectWidth = 40;
const rectHeight = 50;

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

displayInitialText();

function displayInitialText(){

    let x = (rectWidth - rectX)/2 + rectX;
    let y = (rectHeight - rectY)/2 + rectY + 10;

    context.font = "20px Comic Sans MS";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Die", x, y);
    context.fillStyle = "#f5de0cfd";
    //context.fillRect(rectX, rectY+100, rectWidth+25, rectHeight+20);
    context.fillStyle = "white";
    context.textAlign = "left";
    context.font = "18px Comic Sans MS";
    //context.fillText("Conservtory", x-10, y+100);
}

let rollDice = document.getElementById('rollDice');



let counter = 0;
let diceTimerID = 0;

rollDice.onclick = function setTimerForDice(){
    if(counter==0){
        diceTimerID = setInterval(rollDie,500);
    }
}


function rollDie(){

    let dateTime = new Date();
    dateTime.setSeconds(dateTime.getSeconds()+5);

    const cxt = dieCanvas.getContext('2d');
    //cxt.clearRect(0, 0, dieCanvas.width, dieCanvas.height);

    var dieValue = Math.floor(Math.random()*6) + 1; 

    let x = (rectWidth - rectX)/2 + rectX;
    let y = (rectHeight - rectY)/2 + rectY + 10;

    cxt.clearRect(x, y, rectWidth , rectHeight);

    context.font = "20px Comic Sans MS";
    context.fillStyle = "#f5de0cfd";
    context.fillRect(rectX, rectY, rectWidth, rectHeight);
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(dieValue, x, y);

    counter++;
    let time = new Date().getTime();
    if(counter>=15){

        diceCount = dieValue;
        clearInterval(diceTimerID);
        counter = 0;
        dieValue = 0;
        return;
    }
}

