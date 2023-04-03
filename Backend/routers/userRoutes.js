const express = require('express')
const router = new express.Router();
const loginController = require('../controller/loginController');
const registerController = require('../controller/registerController');
const forgotPasswordController = require('../controller/forgotPasswordController')
const updatePassword = require('../controller/updatePassword')

// const validationLogin = require('../middleware/loginValidation') 
// const signupValidation = require('../middleware/signupValidation')
 

router.post('/login',loginController);
router.post("/register",registerController);
router.post("/Forget-password",forgotPasswordController);
router.post('/updatepassword',updatePassword);

module.exports = router