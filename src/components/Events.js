import React from 'react';
import DatedContentTile from './DatedContentTile';

import './DatedContentBlock.css';

const Events = ({ data }) => {
    const renderEvents = data.map((content, index) => {
        return <DatedContentTile key={index} content={content} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2>Events</h2>
                <div className='dated-content-tile-container'>
                    {renderEvents}
                </div>
                <a href='/#' className='see-more'>
                    See more events
                </a>
            </div>
        </section>
    );
};

export default Events;
