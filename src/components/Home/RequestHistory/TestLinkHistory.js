import React from 'react';

const TestLinkHistory = () => {
    return (
        <div className='mt-3'>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
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
                            <td>12:00 AM</td>
                            <td>487</td>
                            <td>4s8er5s5fe57rjmxnfuewrurks</td>
                        </tr>
                        <tr className='text-center'>
                            <th>2</th>
                            <td>10:30 AM</td>
                            <td>875</td>
                            <td>sf7s7ers4e7r7wser</td>
                        </tr>
                        <tr className='text-center'>
                            <th>3</th>
                            <td>11:00 AM</td>
                            <td>797</td>
                            <td>se4s7er7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TestLinkHistory;