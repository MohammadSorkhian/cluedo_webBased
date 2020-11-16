let Room = require('./Room.js');

class Board {

    COLUMNS = 23;
    ROWS = 23;
    BOARD = null;

    constructor(rows, columns) {
        this.ROWS = rows;
        this.COLUMNS = columns;
        this.BOARD = [this.ROWS][this.COLUMNS];
    }

    generateNewBoard(numberOfPlayers,players){

        // MAKE EACH CELL A TILE
        for(let r=0;r<this.ROWS;r++){

            for(let c=0;c<this.COLUMNS;c++){

                tile = new Tile();
                this.BOARD[r][c] = tile;
            }
        }

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


        // SET UP DINNING ROOM
        let dinning = new Room('DINNING',8,15,17,23,15,23);
        for(let r=dinning.startRowIndex;r<=dinning.endRowIndex;r++){
            for(let c=dinning.startColumnIndex;c<=dinning.endColumnIndex;c++){
                this.BOARD[r][c] = dinning;
            }
        }

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


        // SET CARDS
        let roomCards = [];
        let characterCards = [];
        let weaponCards = [];

        // setting rooms
        let studyCard = new Card('STUDY',Card.ROOM);
        roomCards.push(studyCard);

        let hallCard = new Card('HALL',Card.ROOM);
        roomCards.push(hallCard);

        let loungCard = new Card('LOUNGE',Card.ROOM);
        roomCards.push(loungCard);

        let libraryCard = new Card('LIBRARY',Card.ROOM);
        roomCards.push(libraryCard);

        let billiardCard = new Card('BILLIARD',Card.ROOM);
        roomCards.push(billiardCard);

        let consdrvatoryCard = new Card('CONSDRVATORY',Card.ROOM);
        roomCards.push(consdrvatoryCard);

        let dinningCard = new Card('DINNING',Card.ROOM);
        roomCards.push(dinningCard);

        let kitchenCard = new Card('KITCHEN',Card.ROOM);
        roomCards.push(kitchenCard);

        let ballRoomCard = new Card('BALLROOM',Card.ROOM);
        roomCards.push(ballRoomCard);

        // setting characters

        let colonelMustardCard = new Card('Colonel Mustard',Card.ROOM);
        characterCards.push(colonelMustardCard);

        let missScarletCard = new Card('Miss Scarlet',Card.ROOM);
        characterCards.push(missScarletCard);

        let professorPlumCard = new Card('Professor Plum',Card.ROOM);
        characterCards.push(professorPlumCard);

        let mrGreenCard = new Card('Mr Green',Card.ROOM);
        characterCards.push(mrGreenCard);

        let mrsWhiteCard = new Card('Mrs. White',Card.ROOM);
        characterCards.push(mrsWhiteCard);

        let mrsPeacockCard = new Card('Mrs. Peacock',Card.ROOM);
        characterCards.push(mrsPeacockCard);

        // setting weapons

        let candleStickCard = new Card('Candle Stick',Card.ROOM);
        weaponCards.push(candleStickCard);

        let ropeCard = new Card('Rope',Card.ROOM);
        weaponCards.push(ropeCard);

        let knifeCard = new Card('Knife',Card.ROOM);
        weaponCards.push(knifeCard);

        let leadPipeCard = new Card('Lead Pipe',Card.ROOM);
        weaponCards.push(leadPipeCard);

        let wrenchCard = new Card('Wrench',Card.ROOM);
        weaponCards.push(wrenchCard);

        let revolverCard = new Card('Revolver',Card.ROOM);
        weaponCards.push(revolverCard);


        let envelopIndexWeapon = this.getRandomInt(6);
        let envelopIndexRoom = this.getRandomInt(9);
        let envelopIndexChar = this.getRandomInt(6);

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

        // shuffling cards
        weaponCards = this.shuffle(weaponCards);
        characterCards = this.shuffle(characterCards);
        roomCards = this.shuffle(roomCards);

        for(let x=0;x<weaponCards;x++){

            while (true) {

                let playerIndex = this.getRandomInt(numberOfPlayers);

                if (players[playerIndex].cards < Math.floor(18/numberOfPlayers)) {
                    players[playerIndex].cards.push(weaponCards[x]);
                    break;
                }
            }
        }

        for(let x=0;x<characterCards;x++){

            while (true) {

                let playerIndex = this.getRandomInt(numberOfPlayers);

                if (players[playerIndex].cards < Math.floor(18/numberOfPlayers)) {
                    players[playerIndex].cards.push(characterCards[x]);
                    break;
                }
            }
        }

        for(let x=0;x<roomCards;x++){

            while (true) {

                let playerIndex = this.getRandomInt(numberOfPlayers);

                if (players[playerIndex].cards < Math.floor(18/numberOfPlayers)) {
                    players[playerIndex].cards.push(roomCards[x]);
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

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }


}

module.exports = Board;