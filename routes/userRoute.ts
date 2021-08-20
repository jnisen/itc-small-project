const express = require('express');
const router = express.Router();

import {login, register} from '../controllers/userControllers'

router.post('/login',login)
      .post('/register',register)

module.exports = router;