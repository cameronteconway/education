import '../styles/Footer.scss';

interface LinksContent {
    text: string;
    title: string;
}

interface FooterColumns {
    colTitle: string;
    links: LinksContent[];
}

interface Props {
    data: FooterColumns[];
}

const Footer = ({ data }: Props) => {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <div className='footer__link-columns'>
                    {data.map((col: FooterColumns, index: number) => {
                        return (
                            <ul className='footer__column' key={index}>
                                <li className='footer__column-title'>
                                    {col.colTitle}
                                </li>
                                {col.links.map(
                                    (link: LinksContent, index: number) => {
                                        return (
                                            <li
                                                className='footer__column-item'
                                                key={index}
                                            >
                                                <a
                                                    className='footer__column-link'
                                                    href='/#'
                                                >
                                                    {link.text}
                                                </a>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        );
                    })}
                </div>
                <div className='copyright'>
                    ©{' '}
                    <a
                        className='copyright__link'
                        href='https://cameronconway.co.uk'
                        title="Go to Cameron Conway's portfolio website"
                    >
                        Cameron Conway
                    </a>{' '}
                    2022
                </div>
            </div>
        </footer>
    );
};

export default Footer;
