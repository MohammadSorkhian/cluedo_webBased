//Room class
class Room{

    nameofRoom = 'room';
    startIndexofRow;
    lastIndexofRow;
    startIndexofColumn;
    lastIndexofColumn;
    indexofDoorRow;
    indexofDoorCol;
    player = null;
	
//Initialization constructor
    constructor(nameofRoom,startIndexofRow,lastIndexofRow,startIndexofColumn,lastIndexofColumn,indexofDoorRow,indexofDoorCol) {
        this.nameofRoom = nameofRoom;
        this.startIndexofRow = startIndexofRow;
        this.lastIndexofRow = lastIndexofRow;
        this.startIndexofColumn = startIndexofColumn;
        this.lastIndexofColumn = lastIndexofColumn;
        this.indexofDoorRow = indexofDoorRow;
        this.indexofDoorCol = indexofDoorCol;
    }
}
//export other module
module.exports = Room;