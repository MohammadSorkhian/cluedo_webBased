let Board = require('./Board.js');
let Player = require('./Player.js');

exports.setupGame = (req, res) => {

    let board = new Board();

    if (board) {

        let players = [];

        // generate players
        for(let x=0;x<6;x++){
            players.push(new Player(x));
        }

        board.generateNewBoard(6,players);

        res.status(200).send({
            board: board.BOARD,
            message: "Board generated successfully"
        });
    }
    else {
        res.status(500).send({
            message: "Board not generated"
        });
    }
};

