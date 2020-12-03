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