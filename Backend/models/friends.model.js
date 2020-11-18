let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let FriendSchema = new Schema({
    user_id: { type: String, required: true },
    friend_id: { type: String, required: true }
});

FriendSchema.index({user_id:1, friend_id:1}, { unique: true });

FriendSchema.pre('save', function(next) {next();});

module.exports = mongoose.model('Friends', FriendSchema);