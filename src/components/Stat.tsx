interface StatContent {
    stat: string;
    text: string;
}

interface Props {
    data: StatContent;
}

const Stat = ({ data }: Props) => {
    return (
        <div className='stat'>
            <span className='stat__title'>{data.stat}</span>
            <p className='stat__text'>{data.text}</p>
        </div>
    );
};

export default Stat;
