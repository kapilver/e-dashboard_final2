// import { Collection } from "mongoose";
import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";


const ResetPassword = (props) => {

    let location = useLocation();
    const email = location.state.email;
    console.log("email " + location.state.email);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate =useNavigate();

    const collectData = async () => {
        if (newPassword !== confirmPassword) {
             alert("Passwords don't match");
        }else{
            let result = await fetch('http://localhost:5000/updatepassword', {
                method: 'post',
                body: JSON.stringify({ email, newPassword }),
                headers: {
                    'Content-type': 'Application/json',
                }
            })
            result = await result.json();
            navigate("/");
            console.log(result);
            
        }
    }

    
    
return (


    <div className='register'>
        <h1>Reset Password</h1>
        <label className="lebel_rest">New Passoword</label>
        <input className='inputbox' type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter your password' />
        <label className="lebel_rest">Confirm Passoword</label>

        <input className='inputbox' type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />


        <button className='appButton' onClick={collectData} type='button'>Rest Passoword</button>



    </div>
)


}

export default ResetPassword;