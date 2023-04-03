import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ResetPassword from "./Reset-password";

const ForgotPassword = () => {


    const [email, setEmail] = useState('');
    const navigate = useNavigate();



    const forgothandle = async (e) => {



        console.log('forgothandle-----', email);

        let result = await fetch('http://localhost:5000/Forget-password', {
            method: 'post',
            body: JSON.stringify({ email }),
            headers: {
                'Content-type': 'Application/json',
            }
        })
        result = await result.json();
        console.log('rsult login data-----------------------', result);
        console.log(result.msge);
        if (result.msge==="User-exist") {
            navigate('/Reset-password', { replace: true,
            state:{
                email:email
            } })
            
        } else {
            alert('Please Provide Right Email');
            console.log("not exist")

            // console.log("Please Provide Right Email");
        }
    }

    return (

        <div className="forgot-password">
            <h1>Forgot Passoword</h1>

            <input type="email" className="inputbox" id="forgetemailinput" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

            <button type="button" className="forgotPasswordRestebutton" onClick={forgothandle}> Send Rest code </button>

        </div>
    )
}

export default ForgotPassword;