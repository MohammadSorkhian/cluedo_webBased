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
        for(let r=study.startRowIndex;r<=study.endRowIndex;r++){
            for(let c=study.startColumnIndex;c<=study.endColumnIndex;c++){
                this.BOARD[r][c] = study;
            }
        }

        // SET UP LOUNGE ROOM
        let lounge = new Room('LOUNGE',0,4,17,23,4,23);
        for(let r=study.startRowIndex;r<=study.endRowIndex;r++){
            for(let c=study.startColumnIndex;c<=study.endColumnIndex;c++){
                this.BOARD[r][c] = study;
            }
        }

        // SET UP LIBRARY ROOM
        let library = new Room('LIBRARY',6,10,0,6,10,6);
        for(let r=6;r<=10;r++){
            for(let c=0;c<=6;c++){
                this.BOARD[r][c] = library;
            }
        }

        // SET UP BILLIARD ROOM
        let billiard = new Room('BILLIARD',12,16,0,5,16,5);
        for(let r=12;r<=16;r++){
            for(let c=0;c<=5;c++){
                this.BOARD[r][c] = billiard;
            }
        }

        // SET UP CONSDRVATORY ROOM
        let consdrvatory = new Room('CONSDRVATORY',19,23,0,5,23,5);
        for(let r=19;r<=23;r++){
            for(let c=0;c<=5;c++){
                this.BOARD[r][c] = consdrvatory;
            }
        }


        // SET UP DINNING ROOM
        let dinning = new Room('DINNING',8,15,17,23,15,23);
        for(let r=8;r<=15;r++){
            for(let c=17;c<=23;c++){
                this.BOARD[r][c] = dinning;
            }
        }

        // SET UP KITCHEN ROOM
        let kitchen = new Room('KITCHEN',18,23,18,23,18,23);
        for(let r=18;r<=23;r++){
            for(let c=18;c<=23;c++){
                this.BOARD[r][c] = dinning;
            }
        }

        // SET UP BALLROOM
        let ballroom = new Room('BALLROOM',16,23,8,15,16,15);
        for(let r=16;r<=23;r++){
            for(let c=8;c<=15;c++){
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


    }
}