import React from 'react';

const DatedContentTile = ({ content, image }) => {
    return (
        <div className='dated-content-tile'>
            <a href='/#'>
                <div className='img-container'>
                    <img src={image} alt={content.imgAlt} />
                </div>
                <span className='date'>
                    {content.day} <br /> {content.month}
                </span>
                <div className='text-content'>
                    <span className='name'>{content.name}</span>
                </div>
            </a>
            {content.location ? (
                <span className='location'>{content.location}</span>
            ) : null}
            {content.category ? (
                <div className='category-container'>
                    <span className='category'>{content.category}</span>
                </div>
            ) : null}
        </div>
    );
};

export default DatedContentTile;
