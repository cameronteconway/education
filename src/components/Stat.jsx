import React from 'react';

const Stat = ({ content }) => {
    return (
        <div className='stat'>
            <span>{content.stat}</span>
            <p>{content.text}</p>
        </div>
    );
};

export default Stat;
