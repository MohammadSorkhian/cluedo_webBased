class Player{

    playerID;
    playerCharacter;
    playerColor;
    cards = []

    constructor(playerID, playerCharacter, playerColor) {
        this.playerID = playerID;
        this.playerCharacter = playerCharacter;
        this.playerColor = playerColor
    }

}

module.exports = Player;