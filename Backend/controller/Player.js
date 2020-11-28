class Player{

    playerID;
    playerCharacterObject;
    cards = [];
    isPlayerTurn = false;
    playerName = '';

    constructor(playerID, playerCharacterObject) {
        this.playerID = playerID;
        this.playerCharacterObject = playerCharacterObject;
    }

}

module.exports = Player;