"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
router.post('/login', userControllers_1.login)
    .post('/register', userControllers_1.register);
module.exports = router;
