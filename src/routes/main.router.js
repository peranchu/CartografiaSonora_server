const express = require("express");
const router = express.Router();

const controller = require('../controllers/main.controller'); //Controlador Respuesta index

router.get('/', controller.index);



module.exports = router;