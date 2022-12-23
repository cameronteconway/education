import React from 'react';

import '../styles/Footer.css';

const Footer = ({ data }) => {
    return (
        <footer>
            <div className='wrapper'>
                <div className='link-columns'>
                    {data.map((col, index) => {
                        return (
                            <ul key={index}>
                                <li className='column-title'>{col.colTitle}</li>
                                {col.links.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <a href='/#'>{link.text}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
                <div className='copyright'>
                    ©{' '}
                    <a
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
