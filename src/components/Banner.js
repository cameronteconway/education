import React from 'react';

import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img
                src='/images/banners/uni-building.jpg'
                alt='Campus building in summer surrounded by trees'
            />
            <div className='info-box'>
                <span>Open Days</span>
                <p>Sign up to book your open day.</p>
                <a href='/#'>
                    Book open day<span className='right-arrow'></span>
                </a>
            </div>
        </div>
    );
};

export default Banner;
