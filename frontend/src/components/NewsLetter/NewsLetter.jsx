import React from "react";
import './NewsLetters.css';

const NewsLetters = () => {
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsLetter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetters;