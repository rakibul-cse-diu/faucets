import React, { useState } from 'react';
import EthHistory from './EthHistory';
import TestLinkHistory from './TestLinkHistory';


const RequestHistory = () => {
    const [tabSwitch, setTabSwitch] = useState('ETH');
    return (
        <div className='px-10 my-10 w-full md:w-1/2'>
            <div className="tabs">
                <span className={`tab tab-lg tab-lifted font-medium ${tabSwitch === 'ETH' ? 'tab-active bg-gradient-to-t from-primary to-secondary text-white' : 'text-accent'}`} onClick={() => setTabSwitch('ETH')}>ETH Transaction History</span>
                <span className={`tab tab-lg tab-lifted font-medium ${tabSwitch === 'testLink' ? 'tab-active bg-gradient-to-t from-primary to-secondary text-white' : 'text-accent'}`} onClick={() => setTabSwitch('testLink')}>TestLink Transaction History</span>
            </div>
            {tabSwitch === 'ETH' ? <TestLinkHistory /> : <EthHistory />}
        </div>
    );
};

export default RequestHistory;