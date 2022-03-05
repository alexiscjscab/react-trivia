const express = require('express');
const router = express.Router();
const {getAll} = require('../controllers/index.js');

router.get('/', getAll);

module.exports = router;