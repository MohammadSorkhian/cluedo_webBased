let Room = require('./Room.js');
let Tile = require('./Tile.js');
let Card = require('./Card.js');
let Envalop = require('./Envalop.js');
let Character = require('./Character.js');

class Board {
    COLUMNS = 24;
    ROWS = 24;
    BOARD = null;
    CARDS = [];

    constructor(rows, columns) {
        this.ROWS = rows;
        this.COLUMNS = columns;
        this.BOARD = new Array(this.COLUMNS);

        // Making a 2D array
        for (let i = 0; i < this.COLUMNS; i++) {
            this.BOARD[i] = new Array(this.ROWS);
        }
        // Creating cell objects
        for (let i = 0; i < this.COLUMNS; i++) {
            for (var j = 0; j < this.ROWS; j++) {
                this.BOARD[i][j] = new Tile();
            }
        }
    }
// SET UP STUDY ROOM
        let study = new Room('STUDY',0,3,0,6,4,6);
        for(let r=study.startRowIndex;r<=study.endRowIndex;r++){
            for(let c=study.startColumnIndex;c<=study.endColumnIndex;c++){
                this.BOARD[r][c] = study;
            }
        }

       // SET UP HALL ROOM
        let hall = new Room('HALL',0,6,9,14,7,12);
        for(let r=hall.startRowIndex;r<=hall.endRowIndex;r++){
            for(let c=hall.startColumnIndex;c<=hall.endColumnIndex;c++){
                this.BOARD[r][c] = hall;
            }
        }
		
		// SET UP LOUNGE ROOM
        let lounge = new Room('LOUNGE',0,4,17,23,5,23);
        for(let r=lounge.startRowIndex;r<=lounge.endRowIndex;r++){
            for(let c=lounge.startColumnIndex;c<=lounge.endColumnIndex;c++){
                this.BOARD[r][c] = lounge;
            }
        }

        // SET UP LIBRARY ROOM
        let library = new Room('LIBRARY',6,10,0,6,10,6);
        for(let r=library.startRowIndex;r<=library.endRowIndex;r++){
            for(let c=library.startColumnIndex;c<=library.endColumnIndex;c++){
                this.BOARD[r][c] = library;
            }
        }

        this.BOARD[6][6] =  new Tile();
        this.BOARD[10][6] =  new Tile();



        // SET UP BILLIARD ROOM
        let billiard = new Room('BILLIARD',12,16,0,5,13,6);
        for(let r=billiard.startRowIndex;r<=billiard.endRowIndex;r++){
            for(let c=billiard.startColumnIndex;c<=billiard.endColumnIndex;c++){
                this.BOARD[r][c] = billiard;
            }
        }

        // SET UP CONSDRVATORY ROOM
        let conservatory = new Room('CONSERVATORY',19,23,0,5,19,5);
        for(let r=conservatory.startRowIndex;r<=conservatory.endRowIndex;r++){
            for(let c=conservatory.startColumnIndex;c<=conservatory.endColumnIndex;c++){
                this.BOARD[r][c] = conservatory;
            }
        }

        this.BOARD[19][5] =  new Tile();
		
		// SET UP DINNING ROOM
        let dinning = new Room('DINNING',8,15,17,23,15,18);
        for(let r=dinning.startRowIndex;r<=dinning.endRowIndex;r++){
            for(let c=dinning.startColumnIndex;c<=dinning.endColumnIndex;c++){
                this.BOARD[r][c] = dinning;
            }
        }

        this.BOARD[15][17] =  new Tile();
        this.BOARD[15][18] =  new Tile();
        this.BOARD[15][19] =  new Tile();


        // SET UP KITCHEN ROOM
        let kitchen = new Room('KITCHEN',18,23,18,23,17,23);
        for(let r=kitchen.startRowIndex;r<=kitchen.endRowIndex;r++){
            for(let c=kitchen.startColumnIndex;c<=kitchen.endColumnIndex;c++){
                this.BOARD[r][c] = kitchen;
            }
        }

        // SET UP BALLROOM
        let ballroom = new Room('BALLROOM',16,23,8,15,22,15);
        for(let r=ballroom.startRowIndex;r<=ballroom.endRowIndex;r++){
            for(let c=ballroom.startColumnIndex;c<=ballroom.endColumnIndex;c++){
                this.BOARD[r][c] = ballroom;
            }
        }

        this.BOARD[22][8] =  new Tile();
        this.BOARD[22][9] =  new Tile();

        this.BOARD[23][8] =  new Tile();
        this.BOARD[23][9] =  new Tile();

        this.BOARD[22][14] =  new Tile();
        this.BOARD[22][15] =  new Tile();

        this.BOARD[23][14] =  new Tile();
        this.BOARD[23][15] =  new Tile();
		
    generateNewBoard(numberOfPlayers,players){

       

    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

module.exports = Board;