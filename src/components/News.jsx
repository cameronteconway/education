import React from 'react';
import DatedContentTile from './DatedContentTile';

import img1 from '../assets/news/renewable-energy.jpg';
import img2 from '../assets/news/medicine.jpg';
import img3 from '../assets/news/sport.jpg';
import img4 from '../assets/news/tree.jpg';

const images = [img1, img2, img3, img4];

import '../styles/DatedContentBlock.css';

const News = ({ data }) => {
    const renderNews = data.map((content, index) => {
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
                <h2>News</h2>
                <div className='dated-content-tile-container'>{renderNews}</div>
                <a href='/#' className='see-more'>
                    See more news
                </a>
            </div>
        </section>
    );
};

export default News;
