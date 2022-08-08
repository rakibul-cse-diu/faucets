import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import useLogin from '../../hooks/useLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SvgSign from '../../assets/undraw_access_account_re_8spm.svg';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // use Login custom hook for future scope
    // const [login, setLogin] = useLogin();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userData = {
            name: `${firstName} ${lastName}`,
            email,
            password
        }
        // check the password and confrim password is same or not
        if (password !== confrimPassword) {
            setError(true)
        } else {
            setError(false)
            try {
                // send data to the server for register new user
                const data = await axios.post("https://vast-mountain-66122.herokuapp.com/signup", userData)
                setErrorMsg('')
                // can use login hook in future if needed
                // setLogin(true)
                console.log(data)
                toast.success("Successfully sign up.")
            } catch (error) {
                // setLogin(false)
                setErrorMsg(error.response.data.message)
                toast.error("Something wrong! Try again.")
            }
        }


    }

    return (
        <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center min-h-screen'>
            <div className='w-3/4 md:w-2/4'>
                <form onSubmit={(e) => handleSignUp(e)} className=''>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" name="first_name" id="first_name" className="input input-bordered input-md w-full max-w-xs" placeholder="first Name" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setLastName(e.target.value)} type="text" name="last_name" id="last_name" className="input input-bordered input-md w-full max-w-xs" placeholder="Last Name" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setEmail(e.target.value)} autoComplete='off' type="email" name="email" id="email" className="input input-bordered input-md w-full max-w-xs" placeholder="Email Addrress" required />

                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setPassword(e.target.value)} autoComplete='off' type="password" name="password" id="password" className="input input-bordered input-md w-full max-w-xs" placeholder="Password" required />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input onChange={(e) => setConfrimPassword(e.target.value)} type="password" name="repeat_password" id="repeat_password" className="input input-bordered input-md w-full max-w-xs" placeholder="Confrim Password" required />
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