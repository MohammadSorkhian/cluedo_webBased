User = require('../models/user.model');
Friends = require('../models/friends.model');
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
            }
            else {

                Friends.find({ user_id: user.id }, function(err, friends) {

                    if(err) {
                        res.status(500).send({
                            message: "Unable to fetch friends"
                        });
                    }

                    console.log(friends)

                    res.status(200).send({
                        data: {"profile": user,'friends' : friends, "test": true},
                        message: "you are successfully logged In"
                    });

                });


            }
        });
    });

};

// Create Dummy User
exports.createLogin = (req, res) => {

    var testUser = new User({
        id:1,
        username: 'miaftab',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id:2,
        username: 'moso',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id:3,
        username: 'nishant',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id:4,
        username: 'swati',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id:5,
        username: 'prasun',
        password: 'example@1234'
    });

    testUser.save(function (err) {
        if (err) throw err;
    });

    testUser = new User({
        id:6,
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

    User.find(function(err, users) {
        if (err) {
            res.status(500).send({
                message: "unable to fetch all users from db"
            });
        }

        for(let x=0;x<users.length;x++){

            for(let y=0;y<users.length;y++){

                 if(users[x].id !== users[y].id){

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