import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SvgSign from '../../assets/undraw_access_account_re_8spm.svg';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confrimPassword, setConfrimPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [login, setLogin] = useLogin();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (emailError || passwordError || mobileError) {
            return
        }

        const userData = {
            name: `${firstName} ${lastName}`,
            email,
            password,
            mobile
        }

        if (password !== confrimPassword) {
            setError(true)
        } else {
            setError(false)
            try {
                const data = await axios.post("https://vast-mountain-66122.herokuapp.com/api/users", userData)
                // setError(false)
                setErrorMsg('')
                setLogin(true)
                console.log(data)
                toast.success("Successfully sign up.")
            } catch (error) {
                // setError(true)
                setLogin(false)
                setErrorMsg(error.response.data.message)
                toast.error("Something wrong! Try again.")
            }
        }
    }

    const handleFastNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
        if (/^[0-9]{10}$/.test(mobile)) {
            setMobileError(false)
        } else {
            setMobileError(true)
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setPasswordError(false)
        } else {
            setPasswordError(true)
        }
    }

    const handleConfrimPasswordChange = (e) => {
        setConfrimPassword(e.target.value);
    }

    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center min-h-screen'>
            <div className='w-3/4 md:w-2/4'>
                <form onSubmit={(e) => handleSignUp(e)} className=''>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleFastNameChange(e)} type="text" name="first_name" id="first_name" className="input input-bordered input-md w-full max-w-xs" placeholder="first Name" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleLastNameChange(e)} type="text" name="last_name" id="last_name" className="input input-bordered input-md w-full max-w-xs" placeholder="Last Name" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleMobileChange(e)} type="tel" name="mobile" id="mobile" className="input input-bordered input-md w-full max-w-xs" placeholder="Mobile No." required />
                        <br />
                        {
                            mobileError && <span className='text-error text-sm font-normal'>Should 11 digit mobile number</span>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleEmailChange(e)} autoComplete='off' type="email" name="email" id="email" className="input input-bordered input-md w-full max-w-xs" placeholder="Email Addrress" required />
                        <br />
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
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => handleConfrimPasswordChange(e)} type="password" name="repeat_password" id="repeat_password" className="input input-bordered input-md w-full max-w-xs" placeholder="Confrim Password" required />
                        <br />

                        {
                            error && <span className='text-error text-sm font-normal'>Password doesn't match!</span>
                        }
                    </div>
                    {
                        errorMsg && <span className='text-error text-sm font-normal'>{errorMsg}!</span>
                    }
                    <br />
                    <input value='Sign Up' type="submit" className="btn border-none mb-2 text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" /> <br />
                    <span className='text-sm mt-1'>Already have an account? <Link to="/signin"><button className='text-blue-500 decoration-blue-500'>Sign In</button></Link></span>
                </form>
                <ToastContainer />
            </div>
            <div className='w-1/2'>
                <img className='w-3/4 md:w-1/2 mb-5 md:mb-0' src={SvgSign} alt="" />
            </div>
        </div>
    );
};

export default SignUp;