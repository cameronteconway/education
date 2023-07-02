import Stat from './Stat';

import '../styles/Stats.scss';

interface StatsContent {
    stat: string;
    text: string;
}

interface Props {
    data: StatsContent[];
}

const Stats = ({ data }: Props) => {
    const renderStats: JSX.Element[] = data.map(
        (stats: StatsContent, index: number) => {
            return <Stat key={index} data={stats} />;
        }
    );

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
