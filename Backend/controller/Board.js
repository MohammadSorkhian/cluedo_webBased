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

        // SET UP STUDY ROOM
        let study = new Room('STUDY',0,3,0,6,3,6);
        for(let r=study.startRowIndex;r<=study.endRowIndex;r++){
            for(let c=study.startColumnIndex;c<=study.endColumnIndex;c++){
                this.BOARD[r][c] = study;
            }
        }

        // SET UP HALL ROOM
        let hall = new Room('HALL',0,6,9,14,6,9);
        for(let r=hall.startRowIndex;r<=hall.endRowIndex;r++){
            for(let c=hall.startColumnIndex;c<=hall.endColumnIndex;c++){
                this.BOARD[r][c] = hall;
            }
        }

        // SET UP LOUNGE ROOM
        let lounge = new Room('LOUNGE',0,4,17,23,4,23);
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
        let billiard = new Room('BILLIARD',12,16,0,5,16,5);
        for(let r=billiard.startRowIndex;r<=billiard.endRowIndex;r++){
            for(let c=billiard.startColumnIndex;c<=billiard.endColumnIndex;c++){
                this.BOARD[r][c] = billiard;
            }
        }

        // SET UP CONSDRVATORY ROOM
        let conservatory = new Room('CONSERVATORY',19,23,0,5,23,5);
        for(let r=conservatory.startRowIndex;r<=conservatory.endRowIndex;r++){
            for(let c=conservatory.startColumnIndex;c<=conservatory.endColumnIndex;c++){
                this.BOARD[r][c] = conservatory;
            }
        }

        this.BOARD[19][5] =  new Tile();

        // SET UP DINNING ROOM
        let dinning = new Room('DINNING',8,15,17,23,15,23);
        for(let r=dinning.startRowIndex;r<=dinning.endRowIndex;r++){
            for(let c=dinning.startColumnIndex;c<=dinning.endColumnIndex;c++){
                this.BOARD[r][c] = dinning;
            }
        }

        this.BOARD[15][17] =  new Tile();
        this.BOARD[15][18] =  new Tile();
        this.BOARD[15][19] =  new Tile();


        // SET UP KITCHEN ROOM
        let kitchen = new Room('KITCHEN',18,23,18,23,18,23);
        for(let r=kitchen.startRowIndex;r<=kitchen.endRowIndex;r++){
            for(let c=kitchen.startColumnIndex;c<=kitchen.endColumnIndex;c++){
                this.BOARD[r][c] = kitchen;
            }
        }

        // SET UP BALLROOM
        let ballroom = new Room('BALLROOM',16,23,8,15,16,15);
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

        // SET CARDS
        let roomCards = [];
        let characterCards = [];
        let weaponCards = [];

        // setting rooms

        let studyCard = new Card.Card('STUDY',Card.ROOM);
        roomCards.push(studyCard);

        let hallCard = new Card.Card('HALL',Card.ROOM);
        roomCards.push(hallCard);

        let loungCard = new Card.Card('LOUNGE',Card.ROOM);
        roomCards.push(loungCard);

        let libraryCard = new Card.Card('LIBRARY',Card.ROOM);
        roomCards.push(libraryCard);

        let billiardCard = new Card.Card('BILLIARD',Card.ROOM);
        roomCards.push(billiardCard);

        let consdrvatoryCard = new Card.Card('CONSDRVATORY',Card.ROOM);
        roomCards.push(consdrvatoryCard);

        let dinningCard = new Card.Card('DINNING',Card.ROOM);
        roomCards.push(dinningCard);

        let kitchenCard = new Card.Card('KITCHEN',Card.ROOM);
        roomCards.push(kitchenCard);

        let ballRoomCard = new Card.Card('BALLROOM',Card.ROOM);
        roomCards.push(ballRoomCard);

        // setting characters

        let colonelMustardCard = new Card.Card('Colonel Mustard',Card.CHARACTER);
        characterCards.push(colonelMustardCard);

        let missScarletCard = new Card.Card('Miss Scarlet',Card.CHARACTER);
        characterCards.push(missScarletCard);

        let professorPlumCard = new Card.Card('Professor Plum',Card.CHARACTER);
        characterCards.push(professorPlumCard);

        let mrGreenCard = new Card.Card('Mr Green',Card.CHARACTER);
        characterCards.push(mrGreenCard);

        let mrsWhiteCard = new Card.Card('Mrs. White',Card.CHARACTER);
        characterCards.push(mrsWhiteCard);

        let mrsPeacockCard = new Card.Card('Mrs. Peacock',Card.CHARACTER);
        characterCards.push(mrsPeacockCard);

        // setting weapons

        let candleStickCard = new Card.Card('Candle Stick',Card.WEAPON);
        weaponCards.push(candleStickCard);

        let ropeCard = new Card.Card('Rope',Card.WEAPON);
        weaponCards.push(ropeCard);

        let knifeCard = new Card.Card('Knife',Card.WEAPON);
        weaponCards.push(knifeCard);

        let leadPipeCard = new Card.Card('Lead Pipe',Card.WEAPON);
        weaponCards.push(leadPipeCard);

        let wrenchCard = new Card.Card('Wrench',Card.WEAPON);
        weaponCards.push(wrenchCard);

        let revolverCard = new Card.Card('Revolver',Card.WEAPON);
        weaponCards.push(revolverCard);



        let AllCards = weaponCards.concat(characterCards).concat(roomCards);
        this.CARDS = AllCards;


        let envelopIndexWeapon = Board.getRandomInt(6);
        let envelopIndexRoom = Board.getRandomInt(9);
        let envelopIndexChar = Board.getRandomInt(6);


        // SETTING ENVELOP ON BOARD
        let envalop = new Envalop(weaponCards[envelopIndexWeapon],roomCards[envelopIndexRoom],characterCards[envelopIndexChar],
            8,14,9,13);

        for(let r=envalop.startRowIndex;r<=envalop.endRowIndex;r++){
            for(let c=envalop.startColumnIndex;c<=envalop.endColumnIndex;c++){
                this.BOARD[r][c] = envalop;
            }
        }

        // delete envelop cards from arrays
        weaponCards.splice(envelopIndexWeapon, 1);
        characterCards.splice(envelopIndexChar,1);
        roomCards.splice(envelopIndexRoom,1);


        // shuffling cards and assign cards to players

        AllCards = weaponCards.concat(characterCards).concat(roomCards);


        AllCards = this.shuffle(AllCards)
        console.log(AllCards)
        var i=0
        while(AllCards.length!=0){
            if (i % players.length == 0){
                i = 0
            }
            players[i]['cards'].push(AllCards[0])
            AllCards.splice(0,1)
            i++
        }

        for(let y=0;y<players.length;y++) {

            console.log(players[y].playerCharacterObject.name);

            for(let x=0;x<Character.CharacterSpec.length;x++){

                if(Character.CharacterSpec[x].name === players[y].playerCharacterObject.name) {

                    console.log(Character.CharacterSpec[x].name);
                    console.log(Character.CharacterSpec[x].position[1]);
                    console.log(Character.CharacterSpec[x].position[0]);

                    this.BOARD[Character.CharacterSpec[x].position[1]][Character.CharacterSpec[x].position[0]].player = players[y];

                    break;
                }
            }
        }

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
