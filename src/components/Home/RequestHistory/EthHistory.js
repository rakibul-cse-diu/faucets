import React from 'react';

const EthHistory = () => {
    return (
        <div className='mt-3'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className=' text-white text-center'>
                            <th className='capitalize bg-gradient-to-b from-primary to-secondary'>Sr.</th>
                            <th className='capitalize bg-gradient-to-b from-primary to-secondary'>Time</th>
                            <th className='capitalize bg-gradient-to-b from-primary to-secondary'>Amount</th>
                            <th className='capitalize bg-gradient-to-b from-primary to-secondary'>Hash</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <th>1</th>
                            <td>08:30 AM</td>
                            <td>748</td>
                            <td>7s7effkeurusue4</td>
                        </tr>
                        <tr className='text-center'>
                            <th>2</th>
                            <td>10:23 AM</td>
                            <td>974</td>
                            <td>sfe7r7sr4fer</td>
                        </tr>
                        <tr className='text-center'>
                            <th>3</th>
                            <td>11:10 AM</td>
                            <td>874</td>
                            <td>s4e7s8er</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EthHistory;