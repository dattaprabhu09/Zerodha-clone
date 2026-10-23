import React from 'react';
import "./leftsection.css"

function  LeftSection ({imageURL , productName, productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
        <div className='leftsection-container'>
            <div className='leftsection-left'>
                <img src={imageURL} ></img>
            </div>
            <div className='leftsection-right'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='leftsection-right-a'>
                    <a href={tryDemo}>Try Demo </a>
                    <a style={{marginLeft:"30px"}}href={learnMore}>Learn More </a>
                </div>
                <div className='leftsection-right-img'>
                    <a href={googlePlay}><img id="leftsection-img" src="src\assets\googlePlayBadge.svg" /></a>
                    <a style={{marginLeft:"30px"}} href={appStore}><img id="leftsection-img" src="src\assets\appstoreBadge.svg" /></a>
                </div>
            </div>
            
        </div>
     );
}

export default LeftSection;