import InfoColumn from './InfoColumn';

import '../styles/ThreeInfoBlock.scss';

interface Content {
    title: string;
    text: string;
}

interface Props {
    data: Content[];
}

const ThreeInfoBlock = ({ data }: Props) => {
    const renderInfoColumn: JSX.Element[] = data.map(
        (content: Content, index: number) => {
            return <InfoColumn key={index} data={content} />;
        }
    );

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
