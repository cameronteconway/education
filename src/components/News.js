import React from 'react';
import DatedContentTile from './DatedContentTile';

import './DatedContentBlock.css';

const News = ({ data }) => {
    const renderNews = data.map((content, index) => {
        return <DatedContentTile key={index} content={content} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2>News</h2>
                <div className='dated-content-tile-container'>{renderNews}</div>
                <a href='/#' className='see-more'>
                    See more news
                    {/* <i class='bi bi-arrow-right'></i> */}
                </a>
            </div>
        </section>
    );
};

export default News;
