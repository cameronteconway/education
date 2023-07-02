import { useState, useEffect } from 'react';

import '../styles/SocialMedia.scss';

const useOnScreen = (options) => {
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
                    <div className='social'>
                        <h2 className='social__heading'>
                            Explore #CTEC on Social Media
                        </h2>
                        <ul className='social__items'>
                            <li className='social__item'>
                                <a
                                    className='social__link'
                                    href='#test'
                                    title='Visit our LinkedIn page'
                                >
                                    <i className='social__icon bi bi-linkedin'></i>
                                </a>
                            </li>
                            <li className='social__item'>
                                <a
                                    className='social__link'
                                    href='#test'
                                    title='Visit our Twitter page'
                                >
                                    <i className='social__icon bi bi-twitter'></i>
                                </a>
                            </li>
                            <li className='social__item'>
                                <a
                                    className='social__link'
                                    href='#test'
                                    title='Visit our YouTube page'
                                >
                                    <i className='social__icon bi bi-youtube'></i>
                                </a>
                            </li>
                            <li className='social__item'>
                                <a
                                    className='social__link'
                                    href='#test'
                                    title='Visit our Instagram page'
                                >
                                    <i className='social__icon bi bi-instagram'></i>
                                </a>
                            </li>
                            <li className='social__item'>
                                <a
                                    className='social__link'
                                    href='#test'
                                    title='Visit our Facebook page'
                                >
                                    <i className='social__icon bi bi-facebook'></i>
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
