import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SvgLog from '../../assets/undraw_settings_tab_mgiw.svg'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        try {
            // send user data to the server for login
            const data = await axios.get(`https://vast-mountain-66122.herokuapp.com/signin?email=${userData.email}&password=${userData.password}`);
            console.log("data ", data)
            setError(false)
            toast.success("Successfully Sign in");
        } catch (error) {
            setError(true)
            setErrorMsg(error.response.data.message)
            console.log("error", error.response.data.message)
            toast.error("Something wrong! Try again.")
        }
    }

    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center min-h-screen'>
            <div className='w-3/4 md:w-2/4'>
                <form onSubmit={(e) => handleSignIn(e)} className=''>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setEmail(e.target.value)} autoComplete='off' type="email" name="email" id="email" className="input input-bordered input-md w-full max-w-xs" placeholder="Email address" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setPassword(e.target.value)} autoComplete='off' type="password" name="password" id="password" className="input input-bordered input-md w-full max-w-xs" placeholder="Password" required />
                        <br />
                        {
                            error && <span className='text-error text-sm font-normal'>{errorMsg}</span>
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