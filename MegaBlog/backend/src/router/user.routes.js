const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.authMiddleware, userController.getProfile);
router.put('/profile', userController.authMiddleware, userController.updateProfile);

module.exports = router;