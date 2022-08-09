import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Recaptcha from 'react-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext } from '../../App';
import ethereum from '../../assets/undraw_ether_re_y7ft.svg'

const RequestCredit = ({ setHistory }) => {
    const [load, setload] = useState(false);
    const wallet = useContext(WalletContext);
    const [checked, setChecked] = useState(true);
    const [walletaddress, setWalletaddress] = useState('');
    const [walletaddressError, setWalletaddressError] = useState(false);
    const [requesttype, setRequesttype] = useState('TestLink')
    const [amount, setAmount] = useState('0.5 ETH')
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setload(true)
        }, 1500)
        recaptchaLoaded()
        resetRecaptcha()
    }, [])

    const recaptchaLoaded = () => {
        console.log("loaded");
    }

    let recaptchaInstance;

    const resetRecaptcha = () => {
        recaptchaInstance.reset();
    };

    const handleWalletaddressChange = (e) => {
        setWalletaddress(e.target.value)
        if (walletaddress.length >= 8) {
            setWalletaddressError(false)
        } else {
            setWalletaddressError(true)
        }
    }

    const handleTransaction = async () => {
        if (!checked) {
            setErrorMsg('Invalid chaptcha')
            return
        }
        if (walletaddressError) {
            return
        }
        let time = new Date();

        let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
        const dataRequest = {
            walletaddress,
            requesttype,
            amount,
            time: currentTime
        }

        console.log(dataRequest)

        try {
            const sendData = await axios.post("https://vast-mountain-66122.herokuapp.com/api/transaction/", dataRequest)
            setErrorMsg('')
            const requstData = await axios.get("https://vast-mountain-66122.herokuapp.com/api/transaction/history")
            setHistory(requstData.data)
            console.log(sendData)
            toast.success("Successfully sign up.")
        } catch (error) {
            setErrorMsg(error.response.data.message)
            toast.error("Something wrong! Try again.")
        }
    }

    return (
        <div className='px-10 py-5'>
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-primary flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <h3 className='ml-1'>Your wallet is connected to
                    {wallet?.name ? <span className='font-bold'> {wallet.name}</span> :
                        <span className='font-bold'>Ethereum Rinkeby</span>
                    },
                    so you are requesting
                    {wallet?.name ? <span className='font-bold'> {wallet.name} </span> :
                        <span className='font-bold'>Ethereum Rinkeby </span>
                    }
                    Link/ETH.</h3>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full items-start">
                    <img src={ethereum} className="max-w-sm w-1/2" alt='' />
                    <div className='w-1/2 flex flex-col justify-start items-start'>
                        <label className='text-md my-2 font-medium' htmlhtmlFor="">Wallet Address</label>
                        <input type="text" placeholder="Wallet address" className="input input-bordered input-md w-full" onChange={(e) => handleWalletaddressChange(e)} />
                        <br />
                        {
                            walletaddressError && <span className='text-error text-sm font-normal'>At least 8 charecter</span>
                        }
                        <label className='text-md my-2 font-medium' htmlhtmlFor="">Request Type</label>
                        <div className='flex flex-row justify-between w-full mb-3'>
                            <input value="20 Test Link" type="text" placeholder="Wallet address" className="input input-bordered input-md w-full max-w-xs mr-0 md:mr-5" disabled />
                            <input value="0.5 ETH" type="text" placeholder="Wallet address" className="input input-bordered input-md w-full max-w-xs" disabled />
                        </div>
                        <div>
                            <Recaptcha
                                sitekey="6LdA3FUhAAAAALMg-rcpxtmddve1j2frJv61JKao"
                                render="explicit"
                                ref={e => recaptchaInstance = e}
                            //  onloadCallback={recaptchaLoaded}
                            />
                        </div>
                        {
                            errorMsg && <span className='text-error text-sm font-normal'>{errorMsg}!</span>
                        }
                        <br />
                        <button className='mt-5 btn bg-gradient-to-r from-primary to-secondary capitalize text-white outline-none border-none' onClick={handleTransaction}>Send Request</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RequestCredit;