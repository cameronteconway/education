import React from 'react';
import DatedContentTile from './DatedContentTile';

import './DatedContentBlock.css';

const Events = ({ data }) => {
    const renderEvents = data.map((content, index) => {
        return <DatedContentTile key={index} content={content} />;
    });

    return (
        // style={{ backgroundColor: '#F6F6F6' }}
        <section>
            <div className='wrapper'>
                <h2>Events</h2>
                <div className='dated-content-tile-container'>
                    {renderEvents}
                </div>
                <a href='/#' className='see-more'>
                    See more events
                    {/* <i class='bi bi-arrow-right'></i> */}
                </a>
            </div>
        </section>
    );
};

export default Events;
