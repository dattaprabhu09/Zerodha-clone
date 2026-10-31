import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
    return ( 
        <div className='navbar'>
            <div className='nav-left'>
                <Link to="/"> <img src="/logo.svg" alt="zerodha-logo" /></Link>
            </div>

            <div className='nav-right'>
                <Link id="nav-anchor" to='/signup'>Signup</Link>
                <Link id="nav-anchor" to='/about'>About</Link>
                <Link id="nav-anchor" to='/product'>Products</Link>
                <Link id="nav-anchor" to='/pricing'>Pricing</Link>
                <Link id="nav-anchor" to='/support'>Support</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link id="nav-anchor" to='/'><i className="fa-solid fa-bars"></i></Link>
            </div>
            
        </div>
     );
}

export default Navbar;