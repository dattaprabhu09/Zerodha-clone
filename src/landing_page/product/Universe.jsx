import React from 'react';
import "./universe.css"

function  Universe () {
    return ( 
        <div className='universe-container'>
            <div className='first-universe' style={{marginTop:"30px" , margin:"auto"}}>
                <h2>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='second-universe'>
                <div id='second-img'>
                    <a href=''><img id="images" src="src/assets/zerodhaFundhouse.png" /></a><br></br> <br></br>
                    <a href=''>Our asset management venturethat is creating simple and transparent indexfunds to help you save for your goals.</a>
                </div>
                <div id='second-img'>
                    <a href=''><img id="images" src="src/assets/sensibullLogo.svg" /></a><br></br> <br></br>
                    <a href=''>Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</a>
                </div>
                <div id='second-img'>
                    <a href=''><img id="images" src="https://zerodha.com/static/images/partners/tijori.svg" /></a><br></br> <br></br>
                    <a href=''>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</a>
                </div>
            </div>
            <div className='third-universe'>
                <div id='third-img'>
                    <a href=''><img id="images" src="src\assets\streakLogo.png" /></a><br></br> <br></br>
                    <a href=''>Systematic trading platform that allows you to create and backtest strategies without coding.</a>
                </div>
                <div id='third-img'>
                    <a href=''><img id="images" src="src\assets\smallcaseLogo.png" /></a><br></br> <br></br>
                    <a href=''>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</a>
                </div>
                <div id='third-img'>
                    <a href=''><img id="images" src="src\assets\dittoLogo.png" /></a><br></br> <br></br>
                    <a href=''> Personalized advice on life and health insurance. No spam and no mis-selling.</a>
                </div>
                
            </div>
            <div className='four-universe'>
                    <button id='btn-sign'>Sign up for free</button>                
            </div>
        </div>
     );
}

export default Universe;