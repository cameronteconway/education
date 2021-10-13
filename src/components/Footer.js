import React from 'react';

import './Footer.css';

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
                <div className='copyright'>© Cameron Conway 2021</div>
            </div>
        </footer>
    );
};

export default Footer;
