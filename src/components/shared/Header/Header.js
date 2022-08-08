import React from 'react';
import { walletData } from '../../../walletData/walletData';
import metamsk from '../../../assets/icons/MetaMask_Fox.png';
import walletConnect from '../../../assets/icons/walletconnect-logo.png';
import { Link } from 'react-router-dom';

const Header = ({ wallet, setWallet }) => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='http://localhost:3000/'>
                    <span className="btn btn-ghost normal-case text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Faucets</span>
                </a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end border-[2px] border-[#D6D6D6] rounded-md">
                    <label tabIndex="0" className="btn bg-transparent hover:bg-transparent border-none outline-none">
                        <div className="flex justify-center items-center">
                            <img src={wallet.img} alt="" height={15} width={15} className="inline-block" />
                            <span className="capitalize hidden md:inline-block text-accent ml-1">{wallet.name}</span>
                            <svg className="fill-current hidden md:inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </div>
                    </label>
                    <div tabIndex="0" className="mt-3 relative left-1 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body justify-start items-start">
                            {
                                walletData.map((wallet, index) => <div className="flex justify-center items-center mt-2 cursor-pointer" onClick={() => setWallet(walletData[index])} key={index}>
                                    <img src={wallet.img} alt="" height={15} width={15} className="h-6 w-6 inline-block" />
                                    <span className="capitalize ml-1">{wallet.name}</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end mx-2">
                    <label htmlFor="my-modal-3" className="btn btn-sm md:btn-md btn-secondary modal-button capitalize text-white">Connect Wallet</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-error btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-accent mb-5">Connect your wallet</h3>
                            <div className='flex justify-around items-center'>
                                <div className='flex flex-col justify-center items-center cursor-pointer'>
                                    <img src={metamsk} alt="" height={100} width={100} />
                                    <span className='text-secondary text-xl font-bold'>MetaMask</span>
                                </div>
                                <div className='flex flex-col justify-center items-center cursor-pointer'>
                                    <img src={walletConnect} alt="" height={100} width={100} />
                                    <span className='text-secondary text-xl font-bold mt-1'>WalletConnect</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <svg className="absolute left-3 md:left-2 top-2 md:top-1 w-6 h-6 md:w-8 md:h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/">
                                <span className="justify-between">
                                    Profile
                                </span>
                            </Link>
                        </li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;