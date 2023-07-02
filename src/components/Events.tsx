import DatedContentTile from './DatedContentTile';

import img1 from '../assets/events/work-from-home.jpg';
import img2 from '../assets/events/architecture.jpg';
import img3 from '../assets/events/city-art.jpg';
import img4 from '../assets/events/notes.jpg';

const images: string[] = [img1, img2, img3, img4];

import '../styles/DatedContentBlock.scss';

interface EventData {
    name: string;
    day: number;
    month: string;
    img: string;
    imgAlt: string;
    location: string;
}

interface Props {
    data: EventData[];
}

const Events = ({ data }: Props) => {
    const renderEvents: JSX.Element[] = data.map(
        (content: EventData, index: number) => {
            return (
                <DatedContentTile key={index} data={[content, images[index]]} />
            );
        }
    );

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
