import React from 'react';
import "./createticket.css"

function CreateTicket () {
    return ( 
        <div className='ticket-container'>
            <div  style={{marginLeft:"40px",    marginTop:"30px"  }}> 
                <h1>To create a ticket , select a relevant topic</h1>
            </div>
            <div className='ticket-create'>
                <div className='ticket-1'>
                    <div className='section-header'>
                        <i className="fa-regular fa-circle-plus"></i>
                        <h3>Account Opening</h3>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>
                    <ul className='section-link'>
                        <li><a href=''>Resident individual</a></li>
                        <li><a href=''> Minor</a></li>
                        <li><a href=''> Non Resident Indian (NRI)</a></li>
                        <li><a href=''> Company, Partnership, HUF and LLP</a></li>
                        <li><a href=''> Glossary</a></li>
                    </ul>
                </div>

                <div className='ticket-1'>
                    <div className='section-header'>
                        <span className='icon'><i className="icon-account-opening"></i></span>
                        <h3>Your Zerodha Account</h3>
                    </div>
                    <ul className='section-link'>
                        <li><a href=''>Your Profile</a></li>
                        <li><a href=''> Account modification</a></li>
                        <li><a href=''> Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li><a href=''> Nomination</a></li>
                        <li><a href=''> Transfer and conversion of securities</a></li>
                    </ul>
                </div>

            <div className='ticket-1'>
                <div className='section-header'>
                    <span className='icon'><i className="icon-account-opening"></i></span>
                    <h3>Kite </h3>
                </div>
                <ul className='section-link'>
                    <li><a href=''>IPO</a></li>
                    <li><a href=''> Trading FAQs</a></li>
                    <li><a href=''> Margin Trading Facility (MTF) and Margins</a></li>
                    <li><a href=''> Charts and orders</a></li>
                    <li><a href=''> Alerts and Nudges</a></li>
                </ul>
            </div>

            <div className='ticket-1'>
                <div className='section-header'>
                    <span className='icon'><i className="icon-account-opening"></i></span>
                    <h3>Funds </h3>
                </div>
                <ul className='section-link'>
                    <li><a href=''> Add money</a></li>
                    <li><a href=''> Withdraw money</a></li>
                    <li><a href=''> Add bank accounts</a></li>
                    <li><a href=''> eMandates</a></li>
                </ul>
            </div>

            <div className='ticket-1'>
                <div className='section-header'>
                    <span className='icon'><i className="icon-account-opening"></i></span>
                    <h3>Console </h3>
                </div>
                <ul className='section-link'>
                    <li><a href=''>Portfolio</a></li>
                    <li><a href=''> Corporate actions</a></li>
                    <li><a href=''> Funds statement</a></li>
                    <li><a href=''> Profile</a></li>
                    <li><a href=''> Segments</a></li>
                </ul>
            </div>

            <div className='ticket-1'>
                <div className='section-header'>
                    <span className='icon'><i className="icon-account-opening"></i></span>
                    <h3> Coin</h3>
                </div>
                <ul className='section-link'>
                    <li><a href=''> Mutual funds</a></li>
                    <li><a href=''> National Pension Scheme (NPS)</a></li>
                    <li><a href=''> Features on Coin</a></li>
                    <li><a href=''> Payments and Orders</a></li>
                    <li><a href=''> General</a></li>
                </ul>
            </div>
        </div>
            </div>
     );
}

export default CreateTicket ;