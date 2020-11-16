let Board = require('./Board.js');
let Player = require('./Player.js');
var NumberOfPlayers = 4

exports.setupGame = (req, res) => {

    let board = new Board(24,24);

    if (board) {

        let players = [];

        // generate players
        for(let x=0 ; x<NumberOfPlayers ; x++){
            players.push(new Player(x));
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

