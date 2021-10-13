import React from 'react';

import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className='social-media'>
                    {/* <h2>Connect with us...</h2> */}
                    <h2>Explore #CTEC on Social Media</h2>
                    <ul>
                        <li>
                            <a href='#test' title='Visit our LinkedIn page'>
                                <i className='bi bi-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#test' title='Visit our Twitter page'>
                                <i className='bi bi-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#test' title='Visit our YouTube page'>
                                <i className='bi bi-youtube'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#test' title='Visit our Instagram page'>
                                <i className='bi bi-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#test' title='Visit our Facebook page'>
                                <i className='bi bi-facebook'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
