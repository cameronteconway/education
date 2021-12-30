import React, { useState, useEffect } from 'react';

import './SocialMedia.css';

const useOnScreen = options => {
    // https://www.youtube.com/watch?v=QD4GcZJObXg&ab_channel=LeighHalliday
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);

    return [setRef, visible];
};

const SocialMedia = () => {
    const [setRef, visible] = useOnScreen({
        rootMargin: '60px',
        threshold: 0.8,
    });

    return (
        <section>
            <div ref={setRef}>
                <div
                    className={`wrapper animatedFadeInUp ${
                        visible ? 'animated fadeInUp' : ''
                    }`}
                >
                    <div className='social-media'>
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
                                <a
                                    href='#test'
                                    title='Visit our Instagram page'
                                >
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
            </div>
        </section>
    );
};

export default SocialMedia;
