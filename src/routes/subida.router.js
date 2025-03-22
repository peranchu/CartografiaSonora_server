const express = require("express");
const router = express.Router();

const controller = require('../controllers/subida.controller');

router.post('/api/save', controller.subida);

module.exports = router;