class Room{

    name = 'room';
    startRowIndex;
    endRowIndex;
    startColumnIndex;
    endColumnIndex;
    doorRowIndex;
    doorColIndex;

    constructor(name,startRowIndex,endRowIndex,startColumnIndex,endColumnIndex,doorRowIndex,doorColumnIndex) {
        this.name = name;
        this.startRowIndex = startRowIndex;
        this.endRowIndex = endRowIndex;
        this.startColumnIndex = startColumnIndex;
        this.endColumnIndex = endColumnIndex;
        this.doorRowIndex = doorRowIndex;
        this.doorColIndex = doorColumnIndex;
    }
}