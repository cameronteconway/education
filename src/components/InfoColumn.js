import React from 'react';

const InfoColumn = ({ content }) => {
    return (
        <a href='/#' class='column'>
            <span>{content.title}</span>
            <p>{content.text}</p>
            <i class='bi bi-arrow-right'></i>
        </a>
    );
};

export default InfoColumn;
