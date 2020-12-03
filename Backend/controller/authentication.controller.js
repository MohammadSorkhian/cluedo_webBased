User = require('../models/user.model');
Friends = require('../models/friends.model');
// Login
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

exports.getFriends = (req, res) => {
    let ids = req.param('ids');

    User.find({"id": {"$in": ids}}, function (err, friends) {
        if (err) {
            res.status(400).send({
                message: "Bad request no friends"
            });
            return;
        }

        res.status(200).send({
            data: friends,
            message: "Friends has been fetched successfully"
        });
    });
}



// Create Dummy User
exports.createLogin = (req, res) => {

    var testUser = new User({
        id: 1,
        username: 'miaftab',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id: 2,
        username: 'moso',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id: 3,
        username: 'nishant',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id: 4,
        username: 'swati',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id: 5,
        username: 'prasun',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id: 6,
        username: 'adnan',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    res.status(200).send({
        message: "Users created Successfully"
    });

};

// Associate Friends
exports.associateFriendsInAllDB = (req, res) => {

    User.find(function (err, users) {
        if (err) {
            res.status(500).send({
                message: "unable to fetch all users from db"
            });
        }

        for (let x = 0; x < users.length; x++) {

            for (let y = 0; y < users.length; y++) {

                if (users[x].id !== users[y].id) {

                    let friend = new Friends({
                        user_id: users[x].id,
                        friend_id: users[y].id
                    });

                    friend.save(function (err) {
                        if (err) throw err;

                    });
                }
            }
        }

        res.status(200).send({
            message: "Friends Associated Successfully"
        });

    });

};
