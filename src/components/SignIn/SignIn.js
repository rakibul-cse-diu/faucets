import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SvgLog from '../../assets/undraw_settings_tab_mgiw.svg'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (emailError || passwordError) {
            return
        }
        const userData = {
            email,
            password
        }

        try {
            const data = await axios.post("https://vast-mountain-66122.herokuapp.com/api/users/login", userData)
            // setError(false)
            setErrorMsg('')
            // setLogin(true)
            console.log(data)
            toast.success("Successfully sign up.")
        } catch (error) {
            // setError(true)
            // setLogin(false)
            setErrorMsg(error.response.data.message)
            console.log(errorMsg)
            toast.error("Something wrong! Try again.")
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setPasswordError(false)
        } else {
            setPasswordError(true)
        }
    }

    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center min-h-screen'>
            <div className='w-3/4 md:w-2/4'>
                <form onSubmit={(e) => handleSignIn(e)} className=''>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleEmailChange(e)} autoComplete='off' type="email" name="email" id="email" className="input input-bordered input-md w-full max-w-xs" placeholder="Email address" required /> <br />
                        {
                            emailError && <span className='text-error text-sm font-normal'>Please enter valid email.</span>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handlePasswordChange(e)} autoComplete='off' type="password" name="password" id="password" className="input input-bordered input-md w-full max-w-xs" placeholder="Password" required />
                        {
                            passwordError && <div className='flex flex-col justify-center items-center text-left text-error text-sm font-normal'>
                                <span className='text-error text-sm font-normal'>Password should contain</span>
                                <ul className='list-inside list-disc'>
                                    <li> Minimum eight char</li>
                                    <li>uppercase letter</li>
                                    <li>lowercase letter</li>
                                    <li>one number</li>
                                </ul>
                            </div>
                        }
                        <br />
                        {
                            errorMsg && <span className='text-error text-sm font-normal'>{errorMsg}</span>
                        }
                    </div>
                    <input value='Sign In' type="submit" className="btn border-none mb-2 text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" /> <br />
                    <span className='text-sm mt-1'>Don't have any account? <Link to="/signup"><button className='text-blue-500 decoration-blue-500'>Sign Up</button></Link></span>
                </form>
                <ToastContainer />
            </div>
            <div className='w-1/2'>
                <img className='w-3/4 md:w-1/2 mb-5 md:mb-0' src={SvgLog} alt="" />
            </div>
        </div>
    );
};

export default SignIn;