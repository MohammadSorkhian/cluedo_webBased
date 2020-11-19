var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var BoardSchema = new Schema({
    board: {type: String, required: true, index: {unique: true}},
    game_id: {type: Number, default: 0},
});

BoardSchema.methods.getBoardObject = function (cb) {

    cb(null, JSON.parse(this.board));
};

module.exports = mongoose.model('board', BoardSchema);

BoardSchema.methods.getBoardObject = function (cb, game_id) {

    cb(null, JSON.parse(this.board));
};

BoardSchema.methods.getBoardObject = function (cb, game_id) {

    cb(null, JSON.parse(this.board));
};

