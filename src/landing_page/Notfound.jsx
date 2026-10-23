import React from 'react';
import { Link } from 'react-router-dom';
import "./notfound.css"

function  NotFound () {
    return ( 
        <div className='notfound-container'>
           <h2>404 Not a found </h2>
           
           <p>We couldn’t find the page you were looking for.</p>
           <Link to="/">Visit Zerodha’s home page</Link>
        </div>
     );
}

export default NotFound;