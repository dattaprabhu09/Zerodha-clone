import React from 'react';
import "./pricehero.css";

function Hero() {
    return ( 
        <div className='price-hero-container'>
            <div className='hero-first' >
                <h1>Charges</h1>
                <h3>List of all charges and taxes</h3>
            </div>
            <div className='hero-second'>
                <div id='hero-img'>
                    <img src="/pricing0.svg"></img>
                    <h1>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div id='hero-img'>
                    <img src="/pricingEquity.svg"></img>
                    <h1>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div id='hero-img'>
                    <img src="/pricing0.svg"></img>
                    <h1>Free equity delivery</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
            
        </div>
     );
}

export default Hero;