let players = [];
let playersFromServer = [];
let cards = [];
let board = [];
let tiles = [];
let highLightedTiles = [];
let diceCount = null;
let roomDoors = [];
let currentPlayerIndex = 0;

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
            board = result.board;
            playersFromServer = result.players;
            cards = result.cards;

            parseBoard(board);
            createClueSheetTable();

            for(let x=0;x<playersFromServer.length;x++) {

                let id = JSON.parse(localStorage.getItem("user_data")).data.profile.id;
                if(parseInt(playersFromServer[x].id) === id) {

                    currentPlayerIndex = x;
                    createMyCardsTable(playersFromServer[x]);
                    playersTabsTable(playersFromServer);
                    break;
                }
            }


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + errorThrown);
        }
    });


    $("#stay").on( 'click', StayInRoom );
    $("#secret").on( 'click', takePessage );




});

function getUpdatedBoard(diceCount) {




    if(playersFromServer != null && playersFromServer[currentPlayerIndex].isPlayerTurn) {

        if(diceCount != null) {

            $('#message').html("");

            $.ajax({
                url: "http://localhost:3000/get-updated-board",
                type: "POST",
                data: {
                    game_id: Game.id,
                    player: JSON.parse(localStorage.getItem("user_data")).data.profile,
                    diceCount: diceCount

                },
                success: function (result, textStatus, jqXHR) {

                    if (result.success) {
                        playersFromServer = result.board.players
                        console.log(result.board.board);
                        parseBoard(result.board.board);
                    }
                    else {
                        alert(result.message)
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
                }
            });
        }
        else{

            $('#message').html("");
            $('#message').html("Please roll the dice, because its your turn");
        }

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
                    playersFromServer = result.board.players
                    console.log(result)
                    parseBoard(result.board.board);
                } else {
                    console.log(result)
                    playersFromServer = result.board.players
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
            movetocol : movetocol,
        },
        success: function (result, textStatus, jqXHR) {

            if (result.success) {

                playersFromServer = result.board.players
                console.log(result.board);
                rollDice = null;
            }
            else {

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
        }
    });
}


function StayInRoom() {

    // ON FRONT END PLEASE DO CHECK IF THE MOVE IS POSSIBLE OR NOT

    $.ajax({
        url: "http://localhost:3000/stay-in-room",
        type: "POST",
        data: {
            game_id: Game.id,
            player: JSON.parse(localStorage.getItem("user_data")).data.profile,
        },
        success: function (result, textStatus, jqXHR) {

            if (result.success) {

                playersFromServer = result.board.players
                console.log(result.board);
                rollDice = null;

                console.log(result)
            }
            else {

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error: " + errorThrown.toString() + ' ' + textStatus.toString());
        }
    });
}

function takePessage() {

    // ON FRONT END PLEASE DO CHECK IF THE MOVE IS POSSIBLE OR NOT

    $.ajax({
        url: "http://localhost:3000/take-secrate-pessage",
        type: "POST",
        data: {
            game_id: Game.id,
            player: JSON.parse(localStorage.getItem("user_data")).data.profile,
        },
        success: function (result, textStatus, jqXHR) {

            if (result.success) {

                playersFromServer = result.board.players
                console.log(result.board);
                rollDice = null;

                console.log(result)
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

//console.log(canvas);

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

tile.addEventListener("mousedown", function(e)
{
    //console.log(e);
});


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


//  function getMousePosition(canvas, event) {
//     let rect = canvas.getBoundingClientRect();
//     let x = event.offsetX;
//     let y = event.offsetY;
//     console.log("x coords: " + x + ", y coords: " + y);
//                 ctx.beginPath();
//                 ctx.stroke();
//                 console.log(rect);
//                 console.log(event.offsetX+" "+event.offsetY);
//                 ctx.fillStyle = players[2].playerCharacterObject.color;
//                 if(players[2].playerCharacterObject.name =="Mrs. Peacock"){
//                     //ctx.arc(940, 260, 15, 0, 2 * Math.PI);
//                     //ctx.arc(20, 740, 15, 0, 2 * Math.PI);
//                     ctx.arc(x, y, 15, 0, 2 * Math.PI);
//                     //alert('Hello');
//                 }
//                 ctx.fill();
//                 ctx.closePath();
// }
//
// canvas.addEventListener("mousedown", function(e)
// {
//     getMousePosition(canvas, e);
// });



function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

$('#myCanvas').mouseup(function(e) {
    //const transform = ctx.getTransform();
    let rect = canvas.getBoundingClientRect();
    //let x = ((e.clientX-rect.x)/rect.width)*(960);
    //let y = ((e.clientY-rect.y)/rect.height)*(960);
    for(let i=0;i<highLightedTiles.length;i++){
        let highlightedTile = highLightedTiles[i];
        console.log(highlightedTile,"", e.clientX,e.clientY);
        if(e.clientX > highLightedTiles[i].boundRect.x
            && e.clientY > highLightedTiles[i].boundRect.y
            && e.clientX < highLightedTiles[i].boundRect.width
            && e.clientY < highLightedTiles[i].boundRect.height ) {
            console.log(highlightedTile);

            let found = false;
            for(let x=0;x<roomDoors.length;x++){

                if(roomDoors[x].doorRowIndex === highLightedTiles[i].boardY && roomDoors[x].doorColIndex ===highLightedTiles[i].boardX ){
                    found = true;
                    RequestToMove(roomDoors[x].roomObject.startRowIndex, roomDoors[x].roomObject.startColumnIndex);

                    break;
                }
            }

            if(!found)
                RequestToMove(highLightedTiles[i].boardY,highLightedTiles[i].boardX);
        }
    }
    //console.log(e.clientX+" "+e.clientY+" page"+e.pageX+" "+e.pageY+" rect "+rect.top+" "+rect.left);
    //console.log(rect);
    //console.log(x,'-',y);
    //ctx.beginPath();
    //ctx.stroke();
    //ctx.fillStyle = 'red';
    //ctx.arc(x, y, 15, 0, 2 * Math.PI);
    //ctx.fillStyle = players[2].playerCharacterObject.color;
    //if(players[2].playerCharacterObject.name =="Mrs. Peacock"){
    //ctx.arc(940, 260, 15, 0, 2 * Math.PI);
    //ctx.arc(20, 740, 15, 0, 2 * Math.PI);
    //ctx.arc(x, y, 15, 0, 2 * Math.PI);
    //alert('Hello');
    // }
    //ctx.fill();
    //ctx.closePath();
});

function parseBoard(board) {
    let tileXY = null;
    tiles = [];
    players = [];
    highLightedTiles = [];
    roomDoors = [];

    let rect = canvas.getBoundingClientRect();
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let tile = board[i][j];
            //console.log(tile);
            let tileRect = getBoundingRectForTile(j*40,i*40,rect);
            if(tile.name == "tile" && tile.player == null){
                tileXY = new TileXY("none","empty",20+(j*40),20+(i*40),j,i,tileRect);
                if(tile.highlight){
                    highLightedTiles.push(tileXY);
                }
            }
            else if(tile.name == "tile" && tile.player != null){
                //console.log(tile.player);
                tileXY = new TileXY("player",tile.player,20+(j*40),20+(i*40),j,i,tileRect);
                players.push(tileXY);
            }
            else{

                tileXY = new TileXY("room",tile.name,20+(j*40),20+(i*40),j,i,tileRect);

                let found = false;
                for(let x=0;x<roomDoors.length;x++){
                    if(roomDoors[x].name === tile.name){
                        found = true;
                        break;
                    }
                }

                if(!found && tile.name !== undefined){

                    let tempTile = board[tile.doorRowIndex][tile.doorColIndex];
                    let obj = {
                        name : tile.name,
                        doorRowIndex : tile.doorRowIndex,
                        doorColIndex : tile.doorColIndex,
                        roomObject : tile,
                        tilexy : new TileXY("tile",tempTile.name,20+(tile.doorColIndex*40),20+(tile.doorRowIndex*40),tile.doorColIndex,tile.doorRowIndex,tileRect)
                    };
                    roomDoors.push(obj);

                    if(tile.player != null) {
                        tileXY = new TileXY("room",tile.player,20+(j*40),20+(i*40),j,i,tileRect);
                        players.push(tileXY);
                    }
                    console.log(players)

                    console.log(obj.name+'  '+obj.doorRowIndex+'   '+obj.doorColIndex)
                    console.log(obj.roomObject)

                }


            }
            tiles.push(tileXY);
        }


    }



    let found = false;
    for(let x=0;x<roomDoors.length;x++){

        if(roomDoors[x].roomObject.player != null) {
            console.log(roomDoors[x].roomObject.player);
            console.log(JSON.parse(localStorage.getItem("user_data")).data.profile.username);

            if (roomDoors[x].roomObject.player.playerName === JSON.parse(localStorage.getItem("user_data")).data.profile.username) {

                $('#stay').show();
                $('#suggestion').show();

                if (roomDoors[x].name === 'STUDY' || roomDoors[x].name === 'LOUNGE' || roomDoors[x].name === 'CONSERVATORY' || roomDoors[x].name === 'KITCHEN') {
                    $('#secret').show();
                }

                found = true;
                break;
            }
        }
    }

    if(!found){
        $('#stay').hide();
        $('#secret').hide();
        $('#suggestion').hide();
    }
}

draw();

function draw(){
    setInterval(redraw, 10000);

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


    getUpdatedBoard(diceCount);

    layPlayersOnTheBoard(players);
    highlightTiles();

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

function highlightTiles(){


    for(let i=0;i<roomDoors.length;i++){
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "green";
        ctx.rect(roomDoors[i].tilexy.canvasX - 20, roomDoors[i].tilexy.canvasY - 20, 40, 40);
        ctx.stroke();
    }

    console.log(highLightedTiles);
    for(let i=0;i<highLightedTiles.length;i++){
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(highLightedTiles[i].canvasX - 20, highLightedTiles[i].canvasY - 20, 40, 40);
        ctx.stroke();
    }


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
        //console.log(players[i].playerCharacterObject);
        ctx.fillStyle = players[i].name.playerCharacterObject.color;
        //console.log(players[i]);
        ctx.arc(players[i].canvasX, players[i].canvasY, 15, 0, 2 * Math.PI);
        /*         if(players[i].playerCharacterObject.name=="Colonel Mustard"){
                    ctx.arc(940, 260, 15, 0, 2 * Math.PI);
                }
                if(players.player[i].playerCharacterObject.name=="Professor Plum"){
                    ctx.arc(20, 220, 15, 0, 2 * Math.PI);
                }
                if(players[i].player.playerCharacterObject.name=="Mrs. Peacock"){
                    ctx.arc(20, 740, 15, 0, 2 * Math.PI);
                }
                if(players[i].player.playerCharacterObject.name=="Mrs. White"){
                    ctx.arc(580, 940, 15, 0, 2 * Math.PI);
                }
                if(players[i].player.playerCharacterObject.name=="Mr Green"){
                    ctx.arc(380, 940, 15, 0, 2 * Math.PI);
                }
                if(players[i].player.playerCharacterObject.name=="Miss Scarlet"){
                    ctx.arc(660, 20, 15, 0, 2 * Math.PI);
                } */
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
    for(let i=0;i<playersFromServer.length;i++){
        $('#cluesheet').append('<th>'+playersFromServer[i].playerCharacterObject.name+'</th>');
    }
    $('#cluesheet').append('</tr> </thead>');
    for(let j=0;j<cards.length;j++){
        $('#cluesheet').append('<tr>');
        $('#cluesheet').append('<td>'+cards[j].name+'</td>');
        for(let i=0;i<playersFromServer.length;i++){
            $('#cluesheet').append('<td><input type="checkbox" name='+ cards[j].name+'-'+playersFromServer[i].name+' />&nbsp;</td>');
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
        player_table_html += '<tr><td scope="row"><div class="media align-items-center"><div class="imgDiv avatar d-flex ml-1 mr-2"><img class="img" src="https://lh3.googleusercontent.com/prMkp6oKRY4iNucqeZjdplEO4zaeD2KjU6DzruS1PJUzXO_x9xVSZI6Dti6FERItz_8N" alt=""/></div><div class="media-body"><div>' + players[x].playerName + '</div></div>';

        player_table_html += '</div>';


        console.log(JSON.parse(localStorage.getItem("user_data")).data['profile'].username);

        if(JSON.parse(localStorage.getItem("user_data")).data.profile.username === players[x].playerName) {

            player_table_html += '<ul class="list-inline mb-0 mt-2 cards-ul">';

            for (let y = 0; y < players[x].cards.length; y++) {
                player_table_html +=
                    '<li class="list-inline-item">' +
                    // For blur card add and remove "blur" class
                    '<div class="card-div">' +
                    players[x].cards[y].name +
                    '</div>' +
                    '</li>';
            }

        }
        else {

            player_table_html += '<ul class="list-inline mb-0 mt-2 cards-ul">';

            for (let y = 0; y < players[x].cards.length; y++) {
                player_table_html +=
                    '<li class="list-inline-item">' +
                    // For blur card add and remove "blur" class
                    '<div class="card-div blur">' +
                    players[x].cards[y].name +
                    '</div>' +
                    '</li>';
            }

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

function TileXY(type, name, canvasX, canvasY,boardX,boardY,boundRect) {
    this.type = type;
    this.name = name;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.boardX = boardX;
    this.boardY = boardY;
    this.boundRect = boundRect;
}

function getBoundingRectForTile(x,y,rect){
    //console.log(rect);
    let boundRectX = (x/960)*(rect.width);
    let boundRectY = (y/960)*(rect.height);
    let boundRectWidth = ((x+40)/960)*(rect.width)+rect.x;
    let boundRectHeight = ((y+40)/960)*(rect.height)+rect.y;
    let boundRect = new BoundingRect(boundRectX,boundRectY,boundRectWidth,boundRectHeight);
    return boundRect;
}

function BoundingRect(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}