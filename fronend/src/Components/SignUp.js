import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';



    const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/',  { replace: true } )
        }
    }


    )


    const collectData = async () => {

        // console.log(name, price, category, company);

        if (!name || !email || !password) {
            setError(true)
            return false;
        }

        console.log('name-----------', name, email, password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'Post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result = await result.json()

        if(result){


            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration successfully',
                showConfirmButton: false,
                timer: 1000
              })


            
        }
        console.log('signupai data -----------------', result);
        localStorage.setItem('user', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));


        navigate('/'  ,  { replace: true })

    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputbox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            {error && !name && <span className='invalid_title'> enter valid name  </span>}

            <input className='inputbox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
            {error && !email && <span className='invalid_title'> Enter valid email</span>}

            <input className='inputbox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
            {error && password.length<3 && <span className='invalid_title'> Password is too short - should be 6 chars minimum</span>}

            <button className='appButton' onClick={collectData}  type='button'>Signup</button>
            

            
        </div>
    )
}




export default SignUp;