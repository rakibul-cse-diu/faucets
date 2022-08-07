import React from 'react';
import Recaptcha from 'react-recaptcha';
import ethereum from '../../assets/undraw_ether_re_y7ft.svg'

const RequestCredit = () => {
    return (
        <div className='px-10 py-5'>
            <div className='flex'>
                <svg className='' xmlns="http://www.w3.org/2000/svg" class="stroke-primary flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <h3 className='ml-1'>Your wallet is connected to <span className='font-bold'>Ethereum Rinkeby</span>, so you are requesting <span className='font-bold'>Ethereum Rinkeby</span> Link/ETH.</h3>
            </div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse w-full items-start">
                    <img src={ethereum} class="max-w-sm w-1/2" alt='' />
                    <div className='w-1/2 flex flex-col justify-start items-start'>
                        <label className='text-md my-2 font-medium' htmlFor="">Wallet Address</label>
                        <input type="text" placeholder="Wallet address" class="input input-bordered input-md w-full" />
                        <label className='text-md my-2 font-medium' htmlFor="">Request Type</label>
                        <div className='flex flex-row justify-between w-full mb-3'>
                            <input value="20 Test Link" type="text" placeholder="Wallet address" class="input input-bordered input-md w-full max-w-xs mr-0 md:mr-5" disabled />
                            <input value="0.5 ETH" type="text" placeholder="Wallet address" class="input input-bordered input-md w-full max-w-xs" disabled />
                        </div>
                        {/* capatch */}
                        <Recaptcha
                            sitekey="6LdA3FUhAAAAALMg-rcpxtmddve1j2frJv61JKao"
                            render="explicit"
                        />
                        <button className='mt-5 btn bg-gradient-to-r from-primary to-secondary capitalize text-white outline-none border-none'>Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestCredit;