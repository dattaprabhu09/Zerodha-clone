import React from 'react';
import "./team.css"

function Team () {
    return ( 
        <div className='team-container'>
            <div className='heading'>
                <h1>Poeple</h1>
            </div>
            <div className='data'>
                <div id="info-first">
                    <img id="img" src="/nithinKamath.jpg" alt="img" />
                    <h2>Nithin Kamath</h2>
                    <p>Founder, CEO</p>
                </div>
                <div id="info-second">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team ;