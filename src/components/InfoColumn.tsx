interface Content {
    title: string;
    text: string;
}

interface Props {
    data: Content;
}

const InfoColumn = ({ data }: Props) => {
    return (
        <a href='/#' className='column'>
            <span className='column__title'>{data.title}</span>
            <p className='column__text'>{data.text}</p>
            <i className='column__arrow bi bi-arrow-right'></i>
        </a>
    );
};

export default InfoColumn;
