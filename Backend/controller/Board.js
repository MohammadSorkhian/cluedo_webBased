class Board {

    COLUMNS = 23;
    ROWS = 23;
    BOARD = null;

    constructor(rows, columns) {
        this.ROWS = rows;
        this.COLUMNS = columns;
        this.BOARD = [this.ROWS][this.COLUMNS];
    }

    generateNewBoard(){

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
        let WeaponCards = [];

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

        let missScarletCard = new Card('Miss Scarlet',Card.ROOM);
        characterCards.push(missScarletCard);


    }
}