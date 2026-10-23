import React from 'react';
import "./pricing.css"

function Pricing() {
    return ( 
        <div className='price-container'>
            <div id='price-left'>
                <div >
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                    <br></br>
                    <a id="pricing"  href=''>See pricing <i class="fa-solid fa-right-long"></i> </a>
                </div>
            </div>
            <div id='price-right'>
                <div id="price-one">
                    <h1 style={{fontSize:"40px"}}>₹0</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div id="price-two">
                    <h1 style={{fontSize:"40px"}}>₹20 </h1>
                    <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
