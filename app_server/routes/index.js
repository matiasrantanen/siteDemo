const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlStanleyCup = require('../controllers/ctrlStanleyCup'); //Stnaleycup winningteam list
const ctrlTopPlayers = require('../controllers/ctrlTopPlayers'); // top player

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/stanleycup', ctrlStanleyCup.winnerlist);  // List of stanley cup winning teams
router.get('/topplayers', ctrlTopPlayers.winnerlist);  // List of top players

router 
    .route('/stanleycup/add')
    .get(ctrlStanleyCup.showForm) //Display form
    .post(ctrlStanleyCup.addData); //Get form data and make API call

router
    .route('/topplayers/add')
    .get(ctrlTopPlayers.showForm) //Display form
    .post(ctrlTopPlayers.addData); //Get form data and make API call

module.exports = router;
