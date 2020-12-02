User = require('../models/user.model');
Friends = require('../models/friends.model');

// Login function
exports.loginUser = (req, res) => {

    let userName = req.param('user_name');
    let password = req.param('password');

    User.findOne({username: userName}, function (err, user) {
        console.log(user);
        console.log(err);

        if (err) {
            res.status(500).send({
                message: err.message
            });
            return;
        }

        if (user === undefined || user === null) {
            res.status(401).send({
                message: "Incorrect username"
            });
            return;
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err || !isMatch) {
                res.status(401).send({
                    message: "Your Password mismatch. Please enter a correct password"
                });
                return;
            } else {
                Friends.find({user_id: user.id}, function (err, friends) {
                    if (err) {
                        res.status(401).send({
                            message: "Unable to fetch friends"
                        });
                        return;
                    }

                    res.status(200).send({
                        data: {"profile": user, 'friends': friends, "test": true},
                        message: "you are successfully logged In"
                    });

                });


            }
        });
    });

};
