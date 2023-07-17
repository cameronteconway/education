import '../styles/Banner.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <span
                className='banner__image'
                title='Campus building in summer surrounded by trees'
            />
            <div className='banner__info'>
                <span className='banner__title'>Open Day s</span>
                <p className='banner__text'>Sign up to book your open day.</p>
                <a className='banner__link' href='/#'>
                    Book open day<span className='banner__right-arrow'></span>
                </a>
            </div>
        </div>
    );
};

export default Banner;
