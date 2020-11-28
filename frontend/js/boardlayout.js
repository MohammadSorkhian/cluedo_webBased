let players = [];
let cards = [];

let Game = JSON.parse(localStorage.getItem('game'));

$( document ).ready(function() {


    if(Game === null || Game === undefined){
        window.location.href = '../dashboard.html';
    }

    $.ajax({
        url: "http://localhost:3000/get-game",
        type: "POST",
        data: {
            game_id: Game.id,
        },
        success: function (result, textStatus, jqXHR) {

            console.log(result);
            players = result.players;
            cards = result.cards;
            createClueSheetTable();
            createMyCardsTable(players[0]);
            playersTabsTable(players);

            getUpdatedBoard(6);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + errorThrown);
        }
    });

});

function getUpdatedBoard(diceCount) {

    if(players[0].isPlayerTurn) {
        $.ajax({
            url: "http://localhost:3000/get-updated-board",
            type: "POST",
            data: {
                game_id: Game.id,
                player: JSON.parse(localStorage.getItem("user_data")).data.profile,
                diceCount : diceCount

            },
            success: function (result, textStatus, jqXHR) {

                if (result.success) {
                    console.log(result.board)
                }
                else {
                    alert(result.message)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
            }
        });

    }else{

        $.ajax({
            url: "http://localhost:3000/get-updated-board",
            type: "POST",
            data: {
                game_id: Game.id,
                player: JSON.parse(localStorage.getItem("user_data")).data.profile
            },
            success: function (result, textStatus, jqXHR) {

                if (result.success) {

                } else {
                    console.log(result.board)
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
            }
        });
    }
}


function RequestToMove(movetorow,movetocol) {

    // ON FRONT END PLEASE DO CHECK IF THE MOVE IS POSSIBLE OR NOT

    $.ajax({
        url: "http://localhost:3000/move-player",
        type: "POST",
        data: {
            game_id: Game.id,
            player: JSON.parse(localStorage.getItem("user_data")).data.profile,
            movetorow : movetorow,
            movetocol : movetocol
        },
        success: function (result, textStatus, jqXHR) {

            if (result.success) {

            }
            else {

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
        }
    });
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var canvas = ctx.canvas;

ctx.canvas.width  = 960;
ctx.canvas.height = 960;

//document.onmouseup=getXYPosition;

ctx.shadowBlur = 20;
ctx.shadowColor = "black";

// Create gradient
var grd = ctx.createLinearGradient(0,0,2000,2000);
grd.addColorStop(0,"white");
grd.addColorStop(1,"crimson");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,1100,1100);

var tile = new Image();
tile.src = 'images/Tile.png';
tile.onload = function() {
    for(let i=0;i<960;i+=40){
        for(let j=0;j<960;j+=40){
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

draw();

function draw(){

    setInterval(redraw, 1000);

}

function redraw() {

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    
    for(let i=0;i<960;i+=40){
        for(let j=0;j<960;j+=40){
            ctx.drawImage(tile,i,j);
        }
    }

    ctx.drawImage(kitchen,720,720);
    ctx.drawImage(ballroom,320,640);
    ctx.drawImage(conservatory,0,760);
    ctx.drawImage(diningRoom,680,320);
    ctx.drawImage(lounge,685,0);
    ctx.drawImage(hall,360,0);
    ctx.drawImage(study,0,0);
    ctx.drawImage(billiard,0,480);
    ctx.drawImage(library,0,240);
    ctx.drawImage(cellar,360,320);

    layPlayersOnTheBoard(players);

    ctx.beginPath();
    ctx.stroke();
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("CandleStick", 180, 100);
    ctx.fillText("Knife", 460, 100);
    ctx.fillText("Lead Pipe", 780, 140);
    ctx.fillText("Revolver", 180, 900);
    ctx.fillText("Rope", 780, 900);
    ctx.fillText("Wrench", 780, 500);
    ctx.closePath();

}


// Cursor coordinate functions
var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;
function getXYPosition(e){
myMouseX=(e||event).clientX;
myMouseY=(e||event).clientY;
if (document.documentElement.scrollTop > 0) {
    myMouseY = myMouseY + document.documentElement.scrollTop;
}
if (xyOn) {
    alert("X is " + myMouseX + "\nY is " + myMouseY);
}
}
function toggleXY() {
    xyOn = !xyOn;
    document.getElementById('xyLink').blur();
    return false;
}


function layPlayersOnTheBoard(players){
    if(players == null) return;

    for(let i=0;i<players.length;i++){
        ctx.beginPath();
        ctx.stroke();
        ctx.fillStyle = players[i].playerCharacterObject.color;
        if(players[i].playerCharacterObject.name=="Colonel Mustard"){
            ctx.arc(940, 260, 15, 0, 2 * Math.PI);
        }
        if(players[i].playerCharacterObject.name=="Professor Plum"){
            ctx.arc(20, 220, 15, 0, 2 * Math.PI);
        }
        if(players[i].playerCharacterObject.name=="Mrs. Peacock"){
            ctx.arc(20, 740, 15, 0, 2 * Math.PI);
        }
        if(players[i].playerCharacterObject.name=="Mrs. White"){
            ctx.arc(580, 940, 15, 0, 2 * Math.PI);
        }
        if(players[i].playerCharacterObject.name=="Mr Green"){
            ctx.arc(380, 940, 15, 0, 2 * Math.PI);
        }
        if(players[i].playerCharacterObject.name=="Miss Scarlet"){
            ctx.arc(660, 20, 15, 0, 2 * Math.PI);
        }
        ctx.fill();
        ctx.closePath();
    }

  /*   if(players.length >=1){
        ctx.beginPath();
        ctx.arc(940, 260, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }
    if(players.length >=2){
        ctx.beginPath();
        ctx.arc(20, 220, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.closePath();
    }
    if(players.length >=3){
        ctx.beginPath();
        ctx.arc(20, 740, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }
    if(players.length >=4){
        ctx.beginPath();
        ctx.arc(380, 940, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }
    if(players.length >=4){
        ctx.beginPath();
        ctx.arc(580, 940, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    if(players.length >=4){
        ctx.beginPath();
        ctx.arc(660, 20, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    } */
}

let toggleSheet = document.getElementById('toggleSheet');
toggleSheet.onclick = function(){
    // $("#cluesheet").toggle();
    $("#cards").toggle();
}

function createClueSheetTable(){
    $('#cluesheet').append('<thead> <tr>');
    $('#cluesheet').append('<th>&#8625;</th>');
    for(let i=0;i<players.length;i++){
        $('#cluesheet').append('<th>'+players[i].playerCharacterObject.name+'</th>');
    }
    $('#cluesheet').append('</tr> </thead>');
    for(let j=0;j<cards.length;j++){
        $('#cluesheet').append('<tr>');
        $('#cluesheet').append('<td>'+cards[j].name+'</td>');
        for(let i=0;i<players.length;i++){
            $('#cluesheet').append('<td><input type="checkbox" name='+ cards[j].name+'-'+players[i].name+' />&nbsp;</td>');
        }
        $('#cluesheet').append('</tr>');
    }

    // $("#cluesheet").toggle();
}

function createMyCardsTable(player){
    for(let j=0;j<player.cards.length;j++){
        $('#cards').append('<tr>');
        $('#cards').append('<td>'+player.cards[j].name+'</td>');
        $('#cards').append('</tr>');
    }
}
function playersTabsTable(players) {
    let resume_game_table_prefix_html = '<div class="table-responsive users-table-wrap for-playerTabs"><table class="table table-dark users-table table-hover"><thead><tr><th>Players</th><th>Status</th><th>Characters</th></tr></thead><tbody>';

    let player_table_html = resume_game_table_prefix_html;
    let x;
    for (x = 0; x < players.length; x++) {
        player_table_html += '<tr><td scope="row"><div class="media align-items-center"><div class="imgDiv avatar d-flex ml-1 mr-2"><img class="img" src="https://lh3.googleusercontent.com/prMkp6oKRY4iNucqeZjdplEO4zaeD2KjU6DzruS1PJUzXO_x9xVSZI6Dti6FERItz_8N" alt=""/></div><div class="media-body"><div>' + players[x].username + '</div></div>';

        player_table_html += '</div>';

        player_table_html += '<ul class="list-inline mb-0 mt-2 cards-ul">';
        for(let y =0; y <players[x].cards.length;y++){
            player_table_html += '<li class="list-inline-item">' +
                // For blur card add and remove "blur" class
                '<div class="card-div blur">' +
                players[x].cards[y].name +
                '</div>' +
                '</li>';
        }
        player_table_html += '</ul>'+
            '</td><td><i class="fa fa-check fa-2x text-success" aria-hidden="true"></i>'+
            '</td>';

        player_table_html +=
            '<td><div class="media align-items-center">'+
            '<div class="imgDiv avatar d-flex ml-1 mr-2">' +
            '<img class="img" src="images/'+players[x].playerCharacterObject.name+'.jpg" =""/>' +
            '</div>'+
            '<div class="media-body">' +
            '<div>'+players[x].playerCharacterObject.name+'</div>' +
            '</div>' +
            '</div>' +
            '</td>'+
            '</tr>';
    }
    player_table_html += '</tbody></table></div>';


    $("#PlayersTabTable").html('');
    $("#PlayersTabTable").html(player_table_html);

}
