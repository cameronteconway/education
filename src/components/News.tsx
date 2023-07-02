import DatedContentTile from './DatedContentTile';

import img1 from '../assets/news/renewable-energy.jpg';
import img2 from '../assets/news/medicine.jpg';
import img3 from '../assets/news/sport.jpg';
import img4 from '../assets/news/tree.jpg';

const images: string[] = [img1, img2, img3, img4];

import '../styles/DatedContentBlock.scss';

interface NewsData {
    name: string;
    day: number;
    month: string;
    img: string;
    imgAlt: string;
    category: string;
}

interface Props {
    data: NewsData[];
}

const News = ({ data }: Props) => {
    const renderNews: JSX.Element[] = data.map(
        (content: NewsData, index: number) => {
            return (
                <DatedContentTile key={index} data={[content, images[index]]} />
            );
        }
    );

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
