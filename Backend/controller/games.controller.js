// THIS API CALL SETUP THE NEW GAME FOR US
exports.setupNewGame = (req, res) => {


    let board = generateBoard();

    if (board) {

        res.status(200).send({
            board: board,
            message: "Board generated successfully"
        });
    }
    else {
        res.status(500).send({
            message: "Board not generated"
        });
    }
};

// THIS API CALL IS TO GET THE EXISTING GAME
exports.getExistingGame = (req, res) => {

    let board = generateBoard();

    if (board) {

        res.status(200).send({
            board: board,
            message: "Game returned successfully"
        });
    }
    else {
        res.status(500).send({
            message: "Game not exists"
        });
    }
};





function Cell(i, j) {
    // position of the cell
    this.i = i;
    this.j = j;
    // finding variables
    this.f = this.g = this.h = 0;
    this.n = [];
    // Not an obstacle by default
    this.obstacle = false;
    // Cell holds nothing by default
    this.hold = -1;
    // Reset pathfinding variables
    this.pathInit = function () {
        this.n = [];
        if (this.i < COLS - 1) {
            this.n.push(BOARD[this.i + 1][j]);
        }
        if (this.i > 0) {
            this.n.push(BOARD[this.i - 1][j]);
        }
        if (this.j < ROWS - 1) {
            this.n.push(BOARD[this.i][j + 1]);
        }
        if (this.j > 0) {
            this.n.push(BOARD[this.i][j - 1]);
        }
        this.f = this.g = this.h = 0;
    }
}

function generateBoard() {
    // Wipe board and create array
    BOARD = undefined;
    BOARD = new Array(COLS);

    // Making a 2D array
    for (var i = 0; i < COLS; i++) {
        BOARD[i] = new Array(ROWS);
    }
    // Creating cell objects
    for (var i = 0; i < COLS; i++) {
        for (var j = 0; j < ROWS; j++) {
            BOARD[i][j] = new Cell(i, j);
        }
    }

    // Outline the map
    horizontalObstacleLine(BOARD[0][2], BOARD[5][2]);
    verticalObstacleLine(BOARD[5][0], BOARD[5][2]);
    verticalObstacleLine(BOARD[8][0], BOARD[8][5]);
    horizontalObstacleLine(BOARD[8][5], BOARD[11][5]);
    verticalObstacleLine(BOARD[11][0], BOARD[11][5]);
    verticalObstacleLine(BOARD[14][0], BOARD[14][4]);
    horizontalObstacleLine(BOARD[14][4], BOARD[19][4]);
    horizontalObstacleLine(BOARD[0][5], BOARD[4][5]);
    verticalObstacleLine(BOARD[5][6], BOARD[5][8]);
    horizontalObstacleLine(BOARD[0][9], BOARD[4][9]);
    verticalObstacleLine(BOARD[8][7], BOARD[8][11]);
    horizontalObstacleLine(BOARD[8][7], BOARD[11][7]);
    verticalObstacleLine(BOARD[11][7], BOARD[11][11]);
    horizontalObstacleLine(BOARD[8][11], BOARD[11][11]);
    verticalObstacleLine(BOARD[14][8], BOARD[14][11]);
    horizontalObstacleLine(BOARD[14][8], BOARD[19][8]);
    horizontalObstacleLine(BOARD[14][11], BOARD[19][11]);
    horizontalObstacleLine(BOARD[0][11], BOARD[5][11]);
    verticalObstacleLine(BOARD[5][11], BOARD[5][14]);
    horizontalObstacleLine(BOARD[0][14], BOARD[5][14]);
    horizontalObstacleLine(BOARD[0][17], BOARD[4][17]);
    verticalObstacleLine(BOARD[5][18], BOARD[5][19]);
    horizontalObstacleLine(BOARD[8][14], BOARD[13][14]);
    verticalObstacleLine(BOARD[8][14], BOARD[8][19]);
    verticalObstacleLine(BOARD[13][14], BOARD[13][19]);
    horizontalObstacleLine(BOARD[16][15], BOARD[19][15]);
    verticalObstacleLine(BOARD[16][15], BOARD[16][19]);
    return BOARD;
}

function horizontalObstacleLine(start, end) {
    var length = end.i - start.i
    for (i = 0; i <= length; i++) {
        BOARD[start.i + i][start.j].obstacle = true;
    }
}

function verticalObstacleLine(start, end) {
    var length = end.j - start.j
    for (i = 0; i <= length; i++) {
        BOARD[start.i][start.j + i].obstacle = true;
    }
}
