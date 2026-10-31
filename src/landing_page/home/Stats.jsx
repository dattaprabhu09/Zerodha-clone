import React from 'react';
import "./stats.css";

function Stats() {
    return ( 
        <div className='stats-container'>
            <div className='stats-left'>
                <h1>Trust with confidance</h1>
                <br></br>
                <h2>Customer-first always</h2>
                <p>That's why 1.3 crore customers trust Zerodha with rs3.5+ lakh crores worth of equity investments.</p>

                <h2>No spam or gimmicks</h2>
                <p>No gimmicks, spam, "gamification" , or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                <h2>The Zerodha universe</h2>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startup offer you tailored services specific to your needs.</p>

                <h2>Do better with money</h2>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className='stats-right'> 
                <div id="ecosystem">
                <img  src="/ecosystem (1).png" />
                </div>
                <div id='anchor'>
                    <a id="explore"  href=''>Explore our products <i class="fa-solid fa-right-long"></i> </a>&nbsp;
                    <a id= "trykite" href=''>Try Kite </a>
                </div>
            </div>
        </div>
     );
}

export default Stats;