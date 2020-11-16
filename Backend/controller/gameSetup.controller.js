const COLS = 20;
const ROWS = 20;
var board = undefined;

exports.setupGame = (req, res) => {

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
            this.n.push(board[this.i + 1][j]);
        }
        if (this.i > 0) {
            this.n.push(board[this.i - 1][j]);
        }
        if (this.j < ROWS - 1) {
            this.n.push(board[this.i][j + 1]);
        }
        if (this.j > 0) {
            this.n.push(board[this.i][j - 1]);
        }
        this.f = this.g = this.h = 0;
    }
}

function generateBoard() {
    // Wipe board and create array
    board = undefined;
    board = new Array(COLS);

    // Making a 2D array
    for (var i = 0; i < COLS; i++) {
        board[i] = new Array(ROWS);
    }
    // Creating cell objects
    for (var i = 0; i < COLS; i++) {
        for (var j = 0; j < ROWS; j++) {
            board[i][j] = new Cell(i, j);
        }
    }

    // Outline the map
    horizontalObstacleLine(board[0][2], board[5][2]);
    verticalObstacleLine(board[5][0], board[5][2]);
    verticalObstacleLine(board[8][0], board[8][5]);
    horizontalObstacleLine(board[8][5], board[11][5]);
    verticalObstacleLine(board[11][0], board[11][5]);
    verticalObstacleLine(board[14][0], board[14][4]);
    horizontalObstacleLine(board[14][4], board[19][4]);
    horizontalObstacleLine(board[0][5], board[4][5]);
    verticalObstacleLine(board[5][6], board[5][8]);
    horizontalObstacleLine(board[0][9], board[4][9]);
    verticalObstacleLine(board[8][7], board[8][11]);
    horizontalObstacleLine(board[8][7], board[11][7]);
    verticalObstacleLine(board[11][7], board[11][11]);
    horizontalObstacleLine(board[8][11], board[11][11]);
    verticalObstacleLine(board[14][8], board[14][11]);
    horizontalObstacleLine(board[14][8], board[19][8]);
    horizontalObstacleLine(board[14][11], board[19][11]);
    horizontalObstacleLine(board[0][11], board[5][11]);
    verticalObstacleLine(board[5][11], board[5][14]);
    horizontalObstacleLine(board[0][14], board[5][14]);
    horizontalObstacleLine(board[0][17], board[4][17]);
    verticalObstacleLine(board[5][18], board[5][19]);
    horizontalObstacleLine(board[8][14], board[13][14]);
    verticalObstacleLine(board[8][14], board[8][19]);
    verticalObstacleLine(board[13][14], board[13][19]);
    horizontalObstacleLine(board[16][15], board[19][15]);
    verticalObstacleLine(board[16][15], board[16][19]);
    return board;
}

function horizontalObstacleLine(start, end) {
    var length = end.i - start.i
    for (i = 0; i <= length; i++) {
        board[start.i + i][start.j].obstacle = true;
    }
}

function verticalObstacleLine(start, end) {
    var length = end.j - start.j
    for (i = 0; i <= length; i++) {
        board[start.i][start.j + i].obstacle = true;
    }
}
