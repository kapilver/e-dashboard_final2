const User = require('../model/Users');

const forgotPasswordController = async (req,res)=>{

    
    // let userExist = new User(req.body);
    // let user = await User.findOne(req.body)
   
        let userExist  = await User.findOne({ email: req.body.email })
        // await User.findOne({ "$or": [ { email: email }, { phone: phone} ] });
        console.log(userExist);
        userExist===null?res.send({msge:"User not exist"}):res.send({msge:"User-exist"})

}

module.exports = forgotPasswordController;  