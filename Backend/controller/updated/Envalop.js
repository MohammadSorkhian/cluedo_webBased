//class of Envalop

class Envalop{

    weaponCard = null;
    roomCard = null;
    charCard = null;

    firstRowIndex;
    lastRowIndex;
    firstColumnIndex;
    lastColumnIndex;

//initializing constructor
    constructor(weaponCard, roomCard,charCard,firstRowIndex,lastRowIndex,firstColumnIndex,lastColumnIndex) {
        this.weaponCard = weaponCard;
        this.roomCard = roomCard;
        this.charCard = charCard;
        this.startColumnIndex = startColumnIndex;
        this.lastColumnIndex = lastColumnIndex;
        this.firstRowIndex = firstRowIndex;
        this.lastRowIndex = lastRowIndex;
    }

}

module.exports = Envalop;