import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner';
import SocialMedia from './components/SocialMedia';
import Events from './components/Events';
import News from './components/News';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ThreeInfoBlock from './components/ThreeInfoBlock';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    researchData,
    statsData,
    eventData,
    newsData,
    footerData,
} from './data/data';

import './styles/App.scss';

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
