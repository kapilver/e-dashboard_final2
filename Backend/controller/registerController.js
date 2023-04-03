const User = require('../model/Users');
var jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';


const registrerUser =async (req,res)=>{
    
    let user = new User(req.body);
    console.log("----------", user)
    let result = await user.save();
    result = result.toObject();
    delete result.password
    jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            res.send({ result: "something went wornhg , please try afte some time" })
        }

        // console.log('token--------in register ', token);
        res.send({ result, auth: token });

        //you give any name insteaf of auth 

    })



}


module.exports = registrerUser;