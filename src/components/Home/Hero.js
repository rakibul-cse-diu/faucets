import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
            <div className='w-full py-2 text-center bg-gradient-to-t from-primary to-secondary'>
                <h1 className='text-xl font-semibold text-white'>Notice Here</h1>
            </div>
            <div className='p-10 notice'>
                <h1 className='text-3xl font-medium text-primary mb-5'>Request testnet LINK</h1>
                <p className='text-neutral w-full md:w-1/2 text-md'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </div>
        </div>
    );
};

export default Hero;