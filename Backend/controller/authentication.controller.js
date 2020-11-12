User = require('../models/user.model');
// Login
exports.loginUser = (req, res) => {

    let userName = req.param('user_name');
    let password = req.param('password');

    User.findOne({ username: userName }, function(err, user) {
        if(err) {
            res.status(500).send({
                message: "Incorrect username"
            });
        }

        user.comparePassword(password, function(err, isMatch) {
            if (err || !isMatch) {
                res.status(500).send({
                    message: "Your Password mismatch. Please enter a correct password"
                });
            } else {
                res.status(200).send({
                    data: {"profile": user, "test": true},
                    message: "you are successfully logged In"
                });
            }
        });
    });

};

// Create User
exports.createLogin = (req, res) => {
    var testUser = new User({
        username: 'miaftab',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
        res.status(200).send({
            message: "User created Successfully"
        });
    });
};