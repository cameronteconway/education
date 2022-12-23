import React from 'react';
import DatedContentTile from './DatedContentTile';

import img1 from '../assets/events/work-from-home.jpg';
import img2 from '../assets/events/architecture.jpg';
import img3 from '../assets/events/city-art.jpg';
import img4 from '../assets/events/notes.jpg';

const images = [img1, img2, img3, img4];

import '../styles/DatedContentBlock.css';

const Events = ({ data }) => {
    const renderEvents = data.map((content, index) => {
        return (
            <DatedContentTile
                key={index}
                content={content}
                image={images[index]}
            />
        );
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
