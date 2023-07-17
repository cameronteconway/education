import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Content {
    name: string;
    day: number;
    month: string;
    img: string;
    imgAlt: string;
    location?: string;
    category?: string;
}

interface Props {
    data: [Content, string];
}

const DatedContentTile = ({ data }: Props) => {
    const content: Content = data[0];
    const image: string = data[1];
    return (
        <div className='dated-content-tile'>
            <a className='dated-content-tile__link' href='/#'>
                <div className='dated-content-tile__img-container'>
                    <LazyLoadImage
                        className='dated-content-tile__image'
                        src={image}
                        alt={content.imgAlt}
                        loading='lazy'
                    />
                </div>
                <span className='dated-content-tile__date'>
                    {content.day} <br /> {content.month}
                </span>
                <div className='dated-content-tile__text-content'>
                    <span className='dated-content-tile__name'>
                        {content.name}
                    </span>
                </div>
            </a>
            {content.location ? (
                <span className='dated-content-tile__location'>
                    {content.location}
                </span>
            ) : null}
            {content.category ? (
                <div className='dated-content-tile__category-container'>
                    <span className='dated-content-tile__category'>
                        {content.category}
                    </span>
                </div>
            ) : null}
        </div>
    );
};

export default DatedContentTile;
