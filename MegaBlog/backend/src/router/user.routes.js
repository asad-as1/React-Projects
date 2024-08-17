const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth'); 


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);
router.delete('/delete', userController.deleteUser);// while testing authenticate is not required
// router.delete('/delete', authenticate, userController.deleteUser);

module.exports = router;