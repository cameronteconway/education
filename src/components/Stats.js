import React from 'react';
import Stat from './Stat';

import './Stats.css';

const Stats = ({ data }) => {
    const renderStats = data.map((stats, index) => {
        return <Stat key={index} content={stats} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2>Why choose us</h2>
                <div className='stats-container'>{renderStats}</div>
            </div>
        </section>
    );
};

export default Stats;
