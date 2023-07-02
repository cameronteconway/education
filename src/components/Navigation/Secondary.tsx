interface Props {
    toggleNavbarMobile: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Secondary = ({ toggleNavbarMobile }: Props) => {
    return (
        <div className='secondary-nav'>
            <div className='wrapper'>
                <div className='secondary-nav__content'>
                    <a href='/#' className='secondary-nav__logo'>
                        CTEC
                    </a>
                    <nav className='secondary-nav__navigation'>
                        <ul className='secondary-nav__items'>
                            <li className='secondary-nav__item'>
                                <a className='secondary-nav__link' href='/#'>
                                    Coronavirus
                                </a>
                            </li>
                            <li className='secondary-nav__item'>
                                <a className='secondary-nav__link' href='/#'>
                                    Students
                                </a>
                            </li>
                            <li className='secondary-nav__item'>
                                <a className='secondary-nav__link' href='/#'>
                                    Staff
                                </a>
                            </li>
                            <li className='secondary-nav__item'>
                                <a className='secondary-nav__link' href='/#'>
                                    Alumni
                                </a>
                            </li>
                            <li className='secondary-nav__item'>
                                <a className='secondary-nav__link' href='/#'>
                                    Community
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <form className='desktop-search'>
                        <div role='search'>
                            <label
                                className='desktop-search__label'
                                htmlFor='searchq'
                            >
                                Search
                            </label>
                            <input
                                type='text'
                                id='searchq'
                                className='desktop-search__input'
                                name='search-query'
                                placeholder='Search'
                                required
                                title='Search site'
                            />
                            <button
                                className='desktop-search__button'
                                type='submit'
                                name='submit-search'
                                aria-label='Submit search'
                            >
                                <i className='search__icon bi bi-search'></i>
                            </button>
                        </div>
                    </form>
                    <button
                        id='navbar-toggle'
                        type='button'
                        className='secondary-nav__icon-expand'
                        // controls='navbar-menu'
                        aria-label='Toggle menu'
                        aria-expanded='false'
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            toggleNavbarMobile(e)
                        }
                    >
                        <i className='secondary-nav__dropdown-icon bi bi-chevron-double-down'></i>
                    </button>
                </div>
                <div className='mobile-nav fade-in'>
                    <nav className='mobile-nav__navigation'>
                        <ul className='mobile-nav__items'>
                            <li className='mobileListItem mobile-nav__item'>
                                <a
                                    className='mobileLevelMenuItem mobile-nav__link'
                                    href='/#'
                                >
                                    About
                                </a>
                            </li>
                            <li className='mobileListItem mobile-nav__item'>
                                <a
                                    className='mobileLevelMenuItem mobile-nav__link'
                                    href='/#'
                                >
                                    Research
                                </a>
                            </li>
                            <li className='mobileListItem mobile-nav__item'>
                                <a
                                    className='mobileLevelMenuItem mobile-nav__link'
                                    href='/#'
                                >
                                    Admissions
                                </a>
                            </li>
                            <li className='mobileListItem mobile-nav__item'>
                                <a
                                    className='mobileLevelMenuItem mobile-nav__link'
                                    href='/#'
                                >
                                    News &#38; Events
                                </a>
                            </li>
                            <li className='mobileListItem mobile-nav__item'>
                                <a
                                    className='mobileLevelMenuItem mobile-nav__link'
                                    href='/#'
                                >
                                    Campus
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <form className='mobile-search'>
                        <div role='search'>
                            <label
                                className='mobile-search__label'
                                htmlFor='searchq-mobile'
                            >
                                Search
                            </label>
                            <input
                                type='text'
                                id='searchq-mobile'
                                name='search-query'
                                placeholder='Search'
                                required
                                title='Search site'
                                className='mobile-search__input'
                            />
                            <button
                                id='searchq-mobile-submit'
                                className='icon-search mobile-search__button'
                                type='submit'
                                name='submit-search-mobile'
                                aria-label='Submit search'
                            >
                                <i className='bi bi-search'></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Secondary;
