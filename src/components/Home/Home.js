import React from 'react';
import Hero from './Hero';
import RequestCredit from './RequestCredit';
import RequestHistory from './RequestHistory/RequestHistory';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='bg-[#EEF2FE] pb-10'>
                <RequestCredit />
                <RequestHistory />
            </div>
        </div>
    );
};

export default Home;