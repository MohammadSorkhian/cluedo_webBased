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

    BoardModal.findOne({game_id: game_id}, function (err, data) {
        if (data) {

            res.status(200).send({
                board: data.BOARD,
                players: data.players,
                cards: data.cards,
                game_id: data.game_id,
                message: "Board already exist"
            });
        }
        else {

            Game.findOne({'id': game_id}, function (err, game) {

                if (game) {

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

                            if (x === 0) {
                                players[x].isPlayerTurn = true;
                            }

                            players[x].id = game.players[x].id;
                            players[x].playerName = game.players[x].username;
                        }

                        board.generateNewBoard(NumberOfPlayers, players);

                        let _board = new BoardModal({
                            board: board.BOARD,
                            players: players,
                            game_id: game_id,
                            cards: board.CARDS
                        });

                        _board.save(function (err, data) {
                            if (err) throw err;

                            if (data) {
                                res.status(200).send({
                                    board: board.BOARD,
                                    players: players,
                                    cards: board.CARDS,
                                    game_id: game_id,
                                    message: "New board generated successfully"
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

                } else {
                    res.status(400).send({
                        message: "Bad request"
                    });
                }
            });
        }
    });
};

exports.getGame = (req, res) => {
    let game_id = req.body.game_id;

    BoardModal.findOne({'game_id': game_id}, function (err, board) {
        if (board) {
            res.status(200).send({
                board: board.board,
                players: board.players,
                cards: board.cards,
                game_id: board.game_id,
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


exports.getUpdatedBoardStates = (req, res) => {

    let game_id = req.body.game_id;
    let RequestingPlayer = req.body.player;
    let DiceCount  = req.body.diceCount;

    Game.findOne({'id': game_id}, function (err, game) {

        if (game) {

            BoardModal.findOne({'game_id': game_id}, function (err, board) {

                // console.log(board);
                // console.log(game);

                if (board) {

                    let players = null;
                    let boardArray = null;

                    // CHECK IF THIS IS THE CURRENT PLAYER TURN

                    players = board.players;
                    boardArray = board.board;

                    for (let x = 0; x < players.length; x++) {

                        if (players[x].id === RequestingPlayer.id) {

                            if(players[x].isPlayerTurn){

                                if(DiceCount){

                                    for(let r=0;r<24;r++){

                                        for(let c=0;c<24;c++){

                                            if(boardArray[r][c].player){

                                                console.log(boardArray[r][c].player.id)
                                                console.log(RequestingPlayer.id)

                                                if(boardArray[r][c].player.id === RequestingPlayer.id) {

                                                    console.log('here '+r + '  ' + c);

                                                    findThePotentialDestinations(boardArray,r,c,DiceCount)
                                                    findThePotentialDestinations2(boardArray,r,c,DiceCount)
                                                    findThePotentialDestinations3(boardArray,r,c,DiceCount)
                                                    findThePotentialDestinations4(boardArray,r,c,DiceCount)

                                                    res.status(200).send({
                                                        board : board,
                                                        success: true
                                                    });

                                                    return;
                                                }
                                            }

                                        }
                                    }

                                }
                                else{
                                    res.status(200).send({
                                        message: "You need to send the dice count it's your turn",
                                        success: false
                                    });

                                    return;
                                }
                            }

                            break;
                        }

                    }

                    res.status(200).send({
                        board : board,
                        success: true
                    });

                    return;
                }
                else {
                    res.status(400).send({
                        message: "Bad request",
                        success: false
                    });
                }
            });

        }
        else {
            res.status(400).send({
                message: err,
                success: false
            });
        }

    });
};


exports.MovePlayer = (req, res) => {

    let game_id = req.body.game_id;
    let RequestingPlayer = req.body.player;
    let moveToRow  = req.body.movetorow;
    let moveToCol  = req.body.movetocol;

    Game.findOne({'id': game_id}, function (err, game) {

        if (game) {

            BoardModal.findOne({'game_id': game_id}, function (err, board) {

                if (board) {

                    let players = null;
                    let boardArray = null;

                    // CHECK IF THIS IS THE CURRENT PLAYER TURN

                    players = board.players;
                    boardArray = board.board;

                    for (let x = 0; x < players.length; x++) {

                        if (players[x].id === RequestingPlayer.id) {

                            if(players[x].isPlayerTurn){

                                for(let r=0;r<24;r++){

                                    for(let c=0;c<24;c++){

                                        if(boardArray[r][c].player){


                                            if(boardArray[r][c].player.id === RequestingPlayer.id) {

                                                movePlayer(boardArray,moveToRow,moveToCol,r,c,players);


                                                var myPromise = () => (
                                                    new Promise((resolve, reject) => {

                                                        //do something, fetch something....
                                                        //you guessed it, mongo queries go here.

                                                        BoardModal.updateOne({game_id: board.game_id},
                                                            {$set: {board: board.board, players : board.players}},
                                                            {multi: true}, function (err, data) {

                                                                resolve(err,data);
                                                            })

                                                    })
                                                );

                                                var callMyPromise = async () => {
                                                    var result = await (myPromise());
                                                    return result;


                                                };

                                                callMyPromise().then(function(err,result) {

                                                    if(!err){
                                                        res.status(200).send({
                                                            board: board,
                                                            success: true
                                                        })
                                                    }else{

                                                        res.status(200).send({
                                                            message: err,
                                                            success: false
                                                        })
                                                    }

                                                    return;
                                                });

                                                return;
                                            }
                                        }

                                    }
                                }

                            }

                            break;
                        }

                    }

                    res.status(200).send({
                        board : board,
                        success: true
                    });

                }
                else {
                    res.status(400).send({
                        message: "Bad request",
                        success: false
                    });
                }
            });

        }
        else {
            res.status(400).send({
                message: err,
                success: false
            });
        }

    });
};

function movePlayer(board,moveToRow,moveToCol,playerRow,playerCol,players){

    board[moveToRow][moveToCol].player  = JSON.parse(JSON.stringify(board[playerRow][playerCol].player));
    board[moveToRow][moveToCol].player.isPlayerTurn = false;
    board[playerRow][playerCol].player = null;

    // clean all highlightes

    for(let r=0;r<24;r++){

        for(let c=0;c<24;c++){

            board[r][c].highlight = false;

        }
    }

    // change Turn

    for(let x=0;x<players.length;x++){

        if(players[x].isPlayerTurn === true){

            players[x].isPlayerTurn = false;

            if(x+1 >= players.length){
                players[0].isPlayerTurn = true;
            }
            else{
                players[x+1].isPlayerTurn = true;
            }

            break;
        }
    }

}



function findThePotentialDestinations(board,row,col,dice){

    if(row >= 24 || col >= 24 || row < 0 || col <= 0  ||dice === 0 || board[row][col-1].name !== 'tile'){
        return;
    }
    else{

        board[row][col-1].highlight = true;
        findThePotentialDestinations(board,row,col-1,dice-1);
        findThePotentialDestinations2(board,row,col-1,dice-1);
        findThePotentialDestinations3(board,row,col-1,dice-1);
        findThePotentialDestinations4(board,row,col-1,dice-1);
    }

}

function findThePotentialDestinations2(board,row,col,dice){

    if(row >= 24 || col >= 23 || row < 0 || col < 0  ||dice === 0 || board[row][col+1].name !== 'tile'){
        return;
    }
    else{

        board[row][col+1].highlight = true;
        findThePotentialDestinations2(board,row,col+1,dice-1);
        findThePotentialDestinations(board,row,col+1,dice-1);
        findThePotentialDestinations3(board,row,col+1,dice-1);
        findThePotentialDestinations4(board,row,col+1,dice-1);

    }

}

function findThePotentialDestinations3(board,row,col,dice){

    if(row >= 23 || col >= 24 || row < 0 || col < 0  ||dice === 0 || board[row+1][col].name !== 'tile'){
        return;
    }
    else{

        board[row+1][col].highlight = true;
        findThePotentialDestinations3(board,row+1,col,dice-1);
        findThePotentialDestinations(board,row+1,col,dice-1);
        findThePotentialDestinations2(board,row+1,col,dice-1);
        findThePotentialDestinations4(board,row+1,col,dice-1);

    }

}

function findThePotentialDestinations4(board,row,col,dice){

    if(row >= 23 || col >= 24 || row <= 0 || col < 0  ||dice === 0 || board[row-1][col].name !== 'tile'){
        return;
    }
    else{

        board[row-1][col].highlight = true;
        findThePotentialDestinations4(board,row-1,col,dice-1);
        findThePotentialDestinations(board,row-1,col,dice-1);
        findThePotentialDestinations2(board,row-1,col,dice-1);
        findThePotentialDestinations3(board,row-1,col,dice-1);

    }

}