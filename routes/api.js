const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/aggregate', dataController.getAggregatedData);

module.exports = router;