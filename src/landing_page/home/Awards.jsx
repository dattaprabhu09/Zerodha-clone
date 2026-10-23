import React from 'react';
import './awards.css'

function Awards() {
    return (
        <div className='award-container'>
            <div id="award-image"><img src='src/assets/largestBroker.svg'/></div>

            <div id="award-right">
            <div id="inner">
                <h1 id="heading1">Largest stock broker in india</h1>
                {/* <br></br> */}
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                <div className='list1'>
                   <div>
                     <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                   </div>

                    <div>
                     <ul>
                        <li><p>Stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt securities</p></li>
                     </ul>
                    </div>
                </div>
                <img id="presslogos" src='src/assets/pressLogos.png' alt="pressLogos-img"/>
                </div>            
        </div>
        </div>
      );
}

export default Awards;