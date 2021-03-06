var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BoardSchema = new Schema({
    board: {type: JSON, required: true},
    game_id: {type: Number, required: true, unique: true},
    players: {type: JSON},
    cards:{type:JSON}
});

BoardSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('Boards', BoardSchema);

