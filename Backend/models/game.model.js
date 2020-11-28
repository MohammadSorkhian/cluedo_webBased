var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb+srv://miaftab:Windows_5300@universityprojectcluste.1dds7.mongodb.net/test");
autoIncrement.initialize(connection);

var GameSchema = new Schema({
    host_id: {type: Number},
    init_players_count: {type: Number, required: true},
    final_players_count: {type: Number},
    players: {type: JSON, required: true},
    is_game_completed: {type: Boolean, default: false}
});

GameSchema.pre('save', function (next) {
    next();
});


GameSchema.plugin(autoIncrement.plugin, {model: 'Games', field: 'id'});
module.exports = mongoose.model('Games', GameSchema);

