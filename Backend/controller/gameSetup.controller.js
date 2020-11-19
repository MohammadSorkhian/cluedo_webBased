Game = require('../models/game.model');
let Board = require('./Board.js');
let Player = require('./Player.js');
let Character = require('./Character.js');
let NumberOfPlayers = 6

exports.setupGame = (req, res) => {
    let players = req.body.players;
    NumberOfPlayers = players.length;

    let game = new Game({
        init_players_count: NumberOfPlayers,
        final_players_count: 0,
        players: players,
        board_id: null,
        is_game_completed: false
    });

    game.save(function (err, data) {
        if (err) throw err;

        if (data) {
            res.status(200).send({
                game: data,
                message: "game has been created successfully"
            });
        } else {
            res.status(400).send({
                message: "Bad request"
            });
        }
    });

    // let board = new Board(24,24);
    // if (board) {
    //
    //     let players = [];
    //     // generate players
    //
    //     let temp = Character.CharacterSpec.slice();
    //
    //     for(let x=0 ; x<NumberOfPlayers ; x++){
    //
    //         let index = Board.getRandomInt(6-x);
    //
    //         let character = new Character.Character(temp[index].name,temp[index].color);
    //
    //         temp.splice(index, 1);
    //
    //         players.push(new Player(x,character));
    //     }
    //
    //     board.generateNewBoard(NumberOfPlayers,players);
    //
    //     res.status(200).send({
    //         board: board.BOARD,
    //         players: players,
    //         message: "Board generated successfully"
    //     });
    // }
    // else {
    //     res.status(500).send({
    //         message: "Board not generated"
    //     });
    // }
};


