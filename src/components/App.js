import React from 'react';
import Navigation from './Navigation/Navigation';
import Banner from './Banner';
import SocialMedia from './SocialMedia';
import Events from './Events';
import News from './News';
import Stats from './Stats';
import Footer from './Footer';
import ThreeInfoBlock from './ThreeInfoBlock';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    researchData,
    statsData,
    eventData,
    newsData,
    footerData,
} from '../data/data';

import './App.css';

const App = () => {
    return (
        <div>
            <Navigation />
            <main id='content'>
                <Banner />
                <Stats data={statsData} />
                <ThreeInfoBlock data={researchData} />
                <Events data={eventData} />
                <SocialMedia />
                <News data={newsData} />
                <Footer data={footerData} />
            </main>
        </div>
    );
};

export default App;
