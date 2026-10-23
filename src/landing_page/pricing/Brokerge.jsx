import React from 'react';
import "./brokerge.css"

function Brokerge () {
    return ( 
        <div className='brokerge-container'>
            <div className='brokerge-heading'>
                <h1 style={{marginRight:"100px"}}>Brokerge calculator</h1>
                 <h1 >List of charges</h1>
            </div>
            <div>
                <div className='calculator'>
                <ul>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of rs 50 + GST per order</li>
                    <li>Digital contract notes will be sent via e-mail</li>
                    <li>Physics copies of contract notes , if required , shall be charged 20rs per note, Courier charges apply.</li>
                    <li>For NRI account (non-PSI), 0.5% or 100rs pre executed ordered for equity (whichever is lower).</li>
                    <li>For NRI account (non-PSI), 0.5% or 200rs pre executed ordered for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged 40rs per executed order instead of 20rs per excuated order</li>
                </ul>            
            </div>
            <div className='charges'></div>
            </div>
        </div>
     );
}

export default Brokerge;