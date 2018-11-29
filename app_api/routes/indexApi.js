const express = require('express');
const router = express.Router();

const ctrlApiStanleyCup = require('../controllers/ctrlApiStanleyCup');
const ctrlApiTopPlayers = require('../controllers/ctrlApiTopPlayers');

// StanleyCup winner teams
router
    .route('/stanleycup')
    .get(ctrlApiStanleyCup.winnersList)
    .post(ctrlApiStanleyCup.addWinner);

//list of top players in nhl (score)
router 
    .route('/topplayers')
    .get(ctrlApiTopPlayers.winnersList)
    .post(ctrlApiTopPlayers.addWinner);

module.exports = router;