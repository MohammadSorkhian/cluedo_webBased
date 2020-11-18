let Board = require('./Board.js');
let Player = require('./Player.js');
var NumberOfPlayers = 6
var CharacterName = [
    'Colonel Mustard',
    'Miss Scarlet',
    'Professor Plum',
    'Mr Green', 
    'Mrs. White',
    'Mrs. Peacock'
]
var CharacterColor = {
    'Colonel Mustard':"#ffbf00" ,
    'Miss Scarlet':"#ff0000",
    'Professor Plum':"#cc0099",
    'Mr Green':"#00b33c",
    'Mrs. White':"#f2f2f2",
    'Mrs. Peacock':"#4d4dff"
}
exports.setupGame = (req, res) => {

    let board = new Board(24,24);
    if (board) {
        let players = [];
        // generate players
        for(let x=0 ; x<NumberOfPlayers ; x++){
            CharacterName = board.shuffle(CharacterName)
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


