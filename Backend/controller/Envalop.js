class Envalop{

    weaponCard = null;
    roomCard = null;
    charCard = null;

    startRowIndex;
    endRowIndex;
    startColumnIndex;
    endColumnIndex;

    constructor(weaponCard, roomCard,charCard,startRowIndex,endRowIndex,startColumnIndex,endColumnIndex) {
        this.weaponCard = weaponCard;
        this.roomCard = roomCard;
        this.charCard = charCard;
        this.startColumnIndex = startColumnIndex;
        this.endColumnIndex = endColumnIndex;
        this.startRowIndex = startRowIndex;
        this.endRowIndex = endRowIndex;
    }

}

module.exports = Envalop;