var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var BoardSchema = new Schema({
    board: { type: String, required: true, index: { unique: true } },
});

BoardSchema.methods.getBoardObject = function(cb) {

    cb(null, JSON.parse(this.board));
};


module.exports = mongoose.model('board', BoardSchema);