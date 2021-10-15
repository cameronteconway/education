import React from 'react';
import InfoColumn from './InfoColumn';

import './ThreeInfoBlock.css';

const ThreeInfoBlock = ({ data }) => {
    const renderInfoColumn = data.map((content, index) => {
        return <InfoColumn key={index} content={content} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2>Studying with us</h2>
                <div className='three-info-block'>{renderInfoColumn}</div>
            </div>
        </section>
    );
};

export default ThreeInfoBlock;
