const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;
