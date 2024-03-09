const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    let token=req.headers['token'];
    jwt.verify(token,'123-xyz',function (err,success){
        if (err){
            res.status(401).json({status:"unauthorized"})
        }else{
            let email=success['email'];
            req.headers.email=email;
            next();
        }
    })
}