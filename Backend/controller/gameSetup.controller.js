let Board = require('./Board.js');
let Player = require('./Player.js');
let Character = require('./Character.js');
let NumberOfPlayers = 6

exports.setupGame = (req, res) => {

    let board = new Board(24,24);
    if (board) {

        let players = [];
        // generate players

        let temp = Character.CharacterSpec.slice();

        for(let x=0 ; x<NumberOfPlayers ; x++){

            let index = Board.getRandomInt(6-x);

            let character = new Character.Character(temp[index].name,temp[index].color);

            temp.splice(index, 1);

            players.push(new Player(x,character));
        }

        board.generateNewBoard(NumberOfPlayers,players);

        res.status(200).send({
            board: board.BOARD,
            players: players,
            message: "Board generated successfully"
        });
    }
    else {
        res.status(500).send({
            message: "Board not generated"
        });
    }
};


