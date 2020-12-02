//class for player
class Player{

    playerID;
    playerCharObj;
    cards = [];
    isPlayerTurn = false;
    playerName = '';

//initializing constructor
    constructor(playerID, playerCharObj) {
        this.playerID = playerID;
        this.playerCharObj = playerCharObj;
    }

}

module.exports = Player;