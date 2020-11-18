const auth = require('../controller/authentication.controller');
const gameSetup = require('../controller/gameSetup.controller');

module.exports = (app) => {

    // Authentications
    app.post('/login', auth.loginUser);
    app.get('/create-login', auth.createLogin);
    app.get('/associate-friends', auth.associateFriendsInAllDB);

    // Game setup
    app.get('/game-setup', gameSetup.setupGame);
}
