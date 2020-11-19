var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BoardSchema = new Schema({
    board: {type: JSON, required: true},
    game_id: {type: Number},
    players: {type: JSON}
});

BoardSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('Boards', BoardSchema);

