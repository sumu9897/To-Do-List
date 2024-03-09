const express= require('express')
const UserController= require('../controller/UserController');



const  router=express.Router();


router.post("/registration",UserController.registration);
router.post("/login",UserController.login);
router.post("/profileUpdate",UserController.profileUpdate);
router.post("/VeriverifyEmail/:email",UserController.verifyEmail);
router.post("/VerifyOTP/:email/:otp",UserController.verifyOTP);
router.post("/passwordReset/:email/:otp/:password",UserController.passwordReset);




module.exports=router;

