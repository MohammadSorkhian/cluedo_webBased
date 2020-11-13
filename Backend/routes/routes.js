const auth = require('../controller/authentication.controller');
const gameSetup = require('../controller/gameSetup.controller');

module.exports = (app) => {
    app.post('/create-login', auth.createLogin);
    app.post('/login', auth.loginUser);

    // Game setup API's
    app.get('/game-setup', gameSetup.setupGame);
}
