const auth = require('../controller/authentication.controller');

module.exports = (app) => {
    app.post('/create-login', auth.createLogin);
    app.post('/login', auth.loginUser);
}
