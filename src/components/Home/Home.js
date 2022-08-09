import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Hero from './Hero';
import RequestCredit from './RequestCredit';
import RequestHistory from './RequestHistory/RequestHistory';

export const TransactionData = createContext([]);

const Home = ({ wallet, allWallet }) => {
    const [history, setHistory] = useState([]);
    return (
        <TransactionData.Provider value={history}>
            <div>
                <Hero />
                <div className='bg-[#EEF2FE] pb-10'>
                    <RequestCredit setHistory={setHistory} />
                    <RequestHistory />
                </div>
            </div>
        </TransactionData.Provider>
    );
};

export default Home;