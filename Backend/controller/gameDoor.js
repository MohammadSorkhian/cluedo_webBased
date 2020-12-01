class gamedoor{

    name = 'door';
    startRowIndex;
    endRowIndex;
    startColumnIndex;
    endColumnIndex;
    doorRowIndex;
    doorColIndex;
    door;
    player = null;


    constructor1(name,endRowIndex,startColumnIndex,endColumnIndex,doorRowIndex,doorColumnIndex, door) {
        this.name = name;
        this.door = this.startRowIndex
        this.endRowIndex = endRowIndex;
        this.startColumnIndex = startColumnIndex;
        this.endColumnIndex = endColumnIndex;
        this.doorColIndex = doorColumnIndex;
    }

    constructor2(name,startRowIndex,endRowIndex,startColumnIndex,endColumnIndex,doorRowIndex,doorColumnIndex) {
        this.name = name;
        this.startRowIndex = startRowIndex;
        this.endRowIndex = endRowIndex;
        this.startColumnIndex = startColumnIndex;
        this.endColumnIndex = endColumnIndex;
        this.doorRowIndex = doorRowIndex;
        this.doorColIndex = doorColumnIndex;
    }
}

module.exports = door;