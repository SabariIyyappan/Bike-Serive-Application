// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/userController');

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/userController');

// User Login Route
router.post('/auth/login', userLogin);

module.exports = router;
