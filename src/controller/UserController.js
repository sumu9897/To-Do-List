const UsersModel = require("../model/UsersModel");
const jwt=require('jsonwebtoken');
exports.registration=async (req,res)=>{
    try{
        let reqBody=req.body;

        await UsersModel.create(reqBody);
        res.json({status:"success",message:"Registration Completed"})

    }catch (e){
        res.json({status:"fail",message:err})
    }

}


exports.login=async (req,res)=>{

    try{
        let reqBody=req.body;
        let user= await UsersModel.find(reqBody)
        if(user.length>0){
            let Payload={exp:Math.floor(Date.now()/1000)+(24*60*60),data:reqBody['email']}
            let token=jwt.sign(Payload,'123-xyz-abc');
            res.json({status:"success",message:"User Found",token:token})
        }else {
            res.json({status:"fail",message:"No User Found"})
        }
        res.json({status:"success",message:user})

    }catch (err) {
        res.json({status:"fail",message:err})
    }

}

exports.profileUpdate=(req,res)=>{

}

exports.profileDetail=(req,res)=>{

}

exports.verifyEmail=(req,res)=>{

}

exports.verifyOTP=(req,res)=>{

}

exports.passwordReset=(req,res)=>{

}


