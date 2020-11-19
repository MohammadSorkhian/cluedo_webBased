const auth = require('../controller/authentication.controller');
const gameSetup = require('../controller/gameSetup.controller');

module.exports = (app) => {

    // Authentications
    app.post('/login', auth.loginUser);
    app.get('/create-login', auth.createLogin);
    app.get('/associate-friends', auth.associateFriendsInAllDB);
    app.post('/get-friends', auth.getFriends)

    // Game setup
    app.post('/game-setup', gameSetup.setupGame);
    app.post('/get-ready-game', gameSetup.getReadyGame);
    app.post('/update-invite-status', gameSetup.updateInviteStatus);
    app.post('/start-game', gameSetup.startGame);

    app.post('/get-game', gameSetup.getGame);
}
