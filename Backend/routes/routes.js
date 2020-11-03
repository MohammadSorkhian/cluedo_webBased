module.exports = (app) => {

    const auth = require('../controller/authentication.controller');

    // Create a new Note
    app.post('/login', auth.loginUser);


}