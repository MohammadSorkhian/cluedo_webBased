class Player{

    playerID;
    playerCharacterObject;
    cards = []

    constructor(playerID, playerCharacterObject) {
        this.playerID = playerID;
        this.playerCharacterObject = playerCharacterObject;
    }

}

module.exports = Player;