Game = require('../models/game.model');
BoardModal = require('../models/board.model');
let Board = require('./Board.js');
let Player = require('./Player.js');
let Character = require('./Character.js');


exports.setupGame = (req, res) => {
    let players = req.body.players;
    let host = req.body.host;
    NumberOfPlayers = players.length;

    Game.find({"host_id": host.id}, function (err, games) {
        if (err) {
            res.status(400).send({
                message: "Bad request no friends"
            });
            return;
        }

        if (games.length > 0) {
            Game.update({host_id: host.id}, {$set: {"is_game_completed": true}}, {multi: true}, function (err, data) {
                if (!err) {
                    console.log(data);
                }
            })
        }

        let game = new Game({
            host_id: host.id,
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
    });
};

exports.getReadyGame = (req, res) => {
    let host = req.body.host;

    Game.find({$and: [{'host_id': host.id}, {'is_game_completed': false}]}, function (err, games) {
        if (games) {
            res.status(200).send({
                game: games,
                success: true
            });
        } else {
            res.status(400).send({
                message: "Bad request",
                success: false
            });
        }
    });
};

exports.updateInviteStatus = (req, res) => {
    let host = req.body.host;

    Game.find({$and: [{'host_id': host.id}, {'is_game_completed': false}]}, function (err, games) {
        if (games) {

            res.status(200).send({
                game: games,
                success: true
            });
        } else {
            res.status(400).send({
                message: "Bad request",
                success: false
            });
        }
    });
};

exports.startGame = (req, res) => {

    let game_id = req.body.game_id;
    let NumberOfPlayers = req.body.number_of_players;

    let board = new Board(24, 24);
    if (board) {

        let players = [];
        // generate players

        let temp = Character.CharacterSpec.slice();

        for (let x = 0; x < NumberOfPlayers; x++) {

            let index = Board.getRandomInt(6 - x);

            let character = new Character.Character(temp[index].name, temp[index].color);

            temp.splice(index, 1);

            players.push(new Player(x, character));
        }

        board.generateNewBoard(NumberOfPlayers, players);

        let _board = new BoardModal({
            board: board.BOARD,
            players: players,
            game_id: game_id,
        });

        _board.save(function (err, data) {
            if (err) throw err;

            if (data) {
                res.status(200).send({
                    board: board.BOARD,
                    players: players,
                    message: "Board generated successfully"
                });
            } else {
                res.status(400).send({
                    message: "Bad request"
                });
            }
        });
    } else {
        res.status(500).send({
            message: "Board not generated"
        });
    }
};

exports.getGame = (req, res) => {
    let game_id = req.body.game_id;

    BoardModal.find({'game_id': game_id}, function (err, board) {
        if (games) {
            res.status(200).send({
                board: board,
                success: true
            });
        } else {
            res.status(400).send({
                message: "Bad request",
                success: false
            });
        }
    });

};


