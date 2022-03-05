const express = require('express');
const routerScore = express.Router();
const {getScore, postScore} = require('../controllers/index.js');

routerScore.get('/', getScore);
routerScore.post('/', postScore)

module.exports = routerScore;