// Create and Save a new Note
exports.loginUser = (req, res) => {

    let userName = req.param('user_name')
    let password = req.param('password');

    // Database query against a username and retreive a password

    if(userName === "miaftab" && password === "example@1234")
    {
        let user = {
           'email' : 'miaftab@mun.ca',
            'friends' : [{'name': 'friend1'},{'name' : 'friend2'},{'name' : 'friend3'}]
        }

        res.status(200).send({
            data : {"profile" : user, "test" : true},
            message: "you are successfully logged In"
        });

    }
    else {

        res.status(500).send({
            message: "your credentials are not good"
        });

    }
};
