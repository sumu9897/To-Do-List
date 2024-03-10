const express= require('express')
const UserController= require('../controller/UserController');
const TaskController=require('../controller/ListController');
const AuthMiddleware=require('../middleware/AuthMiddleware');



const  router=express.Router();


router.post("/registration",UserController.registration);
router.post("/login",UserController.login);
router.post("/profileUpdate",UserController.profileUpdate);
router.post("/VeriverifyEmail/:email",UserController.verifyEmail);
router.post("/VerifyOTP/:email/:otp",UserController.verifyOTP);
router.post("/passwordReset/:email/:otp/:password",UserController.passwordReset);

router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate);
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);

router.post("/list/create",AuthMiddleware,ListController.create);
router.post("/list/update/:id",AuthMiddleware,ListController.update);
router.get("/list/read",AuthMiddleware,ListController.read);
router.get("/list/delete/:id",AuthMiddleware,ListController.delete);




module.exports=router;

