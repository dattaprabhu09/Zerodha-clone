import React from 'react';
import "./support-hero.css"

function  Hero () {
    return ( 
        <div className='support-hero-container'>
            <div className='support-header'>
                <div className='sub-header-1'>
                    <h1 style={{fontSize:"45px"}}>Support Portal</h1>   
                    <button>My Tickets</button>
                </div>
                <div className='sub-header-2'>
                    <input type='text' placeholder='Eg: How do I open my account' />
                </div>
            </div>
            <div></div>

            
        </div>
     );
}

export default Hero;