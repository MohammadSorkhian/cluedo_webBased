var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.canvas.width  = 960;
ctx.canvas.height = 960;

// Create gradient
var grd = ctx.createLinearGradient(0,0,2000,2000);
grd.addColorStop(0,"white");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,1100,1100);

for(let i=0;i<960;i+=40){
    for(let j=0;j<960;j+=40){
        let tile = new Image();
        tile.src = 'images/Tile.png';
        tile.onload = function() {
            ctx.drawImage(tile,i,j);
        }
    }
}



var kitchen = new Image();
kitchen.src = 'images/Kitchen.png';
kitchen.onload = function() {
    ctx.drawImage(kitchen,720,720);
}
var ballroom = new Image();
ballroom.src = 'images/Ballroom.png';
ballroom.onload = function() {
    ctx.drawImage(ballroom,320,640);
}
var conservatory = new Image();
conservatory.src = 'images/Conservatory.png';
conservatory.onload = function() {
    ctx.drawImage(conservatory,0,760);
}
var diningRoom = new Image();
diningRoom.src = 'images/DiningRoom.png';
diningRoom.onload = function() {
    ctx.drawImage(diningRoom,680,320);
}
var lounge = new Image();
lounge.src = 'images/Lounge.png';
lounge.onload = function() {
    ctx.drawImage(lounge,685,0);
}
var hall = new Image();
hall.src = 'images/Hall.png';
hall.onload = function() {
    ctx.drawImage(hall,360,0);
}


var study = new Image();
study.src = 'images/Study.png';
study.onload = function() {
    ctx.drawImage(study,0,0);
}
var billiard = new Image();
billiard.src = 'images/Billiard.png';
billiard.onload = function() {
    ctx.drawImage(billiard,0,480);
}
var library = new Image();
library.src = 'images/Library.png';
library.onload = function() {
    ctx.drawImage(library,0,240);
}
var cellar = new Image();
cellar.src = 'images/Cellar.png';
cellar.onload = function() {
    ctx.drawImage(cellar,360,320);
}
