import React from 'react';
import "./education.css"

function  Education() {
    return ( 
        <div className='education-container'>
            <div id="edu-left">
                <img src="/education.svg" alt="education-img" />
            </div>
            <div id="edu-right">
             
                 <h1>Free and open market education</h1>
                 <br></br>
                 <p>Versity, the largest online stock market education book in the world covering everything from the basics to        advanced trading</p>
                 <a id="versity"  href='' >Versity &nbsp; <i class="fa-solid fa-right-long"></i></a>
                 <br></br>
                 <br></br>
                 <br></br>
                 <p>TradingQ&a, the most active trading and investment community in India for all your market ralated queries</p>
                 <a id="trading" href='' >TradingQ&A &nbsp;<i class="fa-solid fa-right-long"></i></a>
                
            </div>
        </div>
     );
}

export default Education;