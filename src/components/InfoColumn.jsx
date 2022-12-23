import React from 'react';

const InfoColumn = ({ content }) => {
    return (
        <a href='/#' className='column'>
            <span>{content.title}</span>
            <p>{content.text}</p>
            <i className='bi bi-arrow-right'></i>
        </a>
    );
};

export default InfoColumn;
