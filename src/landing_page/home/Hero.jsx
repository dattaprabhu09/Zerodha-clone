import React from 'react';
import "./Hero.css"

function Hero () {
    return (  
        <div className='hero-container'>
            <div className='row'>
                <img src="src/assets/homeHero.png"  alt='homeHero.photo'/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button id='signup'>Signup now</button>
            </div>

        </div>
    );
}

export default Hero ;
