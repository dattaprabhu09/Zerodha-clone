import React from 'react';
import "./rightsection.css"

function  RightSection ({imageURL , productName, productDescription , learnMore, googlePlay , appStore}) {
    return ( 
        <div className='rightsection-container'>
            <div className='rightsection-left'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='rightsection-left-a'>
                    <a style={{marginLeft:"30px"}}href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='rightsection-left-img'>
                    <a href={googlePlay}><img id="rightsection-img" src="/googlePlayBadge.svg" /></a>
                    <a style={{marginLeft:"30px"}} href={appStore}><img id="rightsection-img" src="/appstoreBadge.svg" /></a>
                </div>
            </div>
              <div className='rightsection-right'>
                <img  src={imageURL} ></img>
            </div>
            
        </div>
     );
}

export default RightSection;