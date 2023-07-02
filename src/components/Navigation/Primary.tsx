interface Props {
    functionality: [
        () => void,
        () => void,
        (e: React.FocusEvent<HTMLAnchorElement>) => void
    ];
}

const Primary = ({ functionality }: Props) => {
    const [hoverDropdown, hoverOutDropdown, focusDropdown] = functionality;
    return (
        <div className='primary-nav'>
            <div className='wrapper'>
                <a href='#test' className='primary-nav__logo'>
                    <h1 className='primary-nav__title'>CTEC</h1>
                </a>
                <nav id='primary-nav' className='primary-nav__navigation'>
                    <ul className='primary-nav__items'>
                        <li className='primary-nav__item'>
                            <a
                                href='#test'
                                onFocus={(
                                    e: React.FocusEvent<HTMLAnchorElement>
                                ) => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem primary-nav__link'
                            >
                                About
                            </a>
                            <ul className='dropdown'>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        History
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Facts &#38; figures
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Vision &#38; values
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Maps &#38; directions
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Campuses
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='primary-nav__item'>
                            <a
                                href='#test'
                                onFocus={(
                                    e: React.FocusEvent<HTMLAnchorElement>
                                ) => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem primary-nav__link'
                            >
                                Research
                            </a>
                            <div className='mega-menu'>
                                <div className='mega-menu__content'>
                                    <div className='mega-menu__row'>
                                        <ul className='mega-menu__items'>
                                            <li className='mega-menu__col-title'>
                                                Our Research
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Research impact
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Public engagement
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Case studies
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Digital research
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mega-menu__row'>
                                        <ul className='mega-menu__items'>
                                            <li className='mega-menu__col-title'>
                                                Explore
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Libraries
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Projects
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Support for researchers
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Contact research
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='mega-menu__row'>
                                        <ul className='mega-menu__items'>
                                            <li className='mega-menu__col-title'>
                                                Browse By
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Research by school
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Research by faculty
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Research by academic
                                                </a>
                                            </li>
                                            <li className='mega-menu__item'>
                                                <a
                                                    className='dropdownLevelMenuItem mega-menu__link'
                                                    href='/#'
                                                >
                                                    Research news
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='primary-nav__item'>
                            <a
                                href='#test'
                                onFocus={(
                                    e: React.FocusEvent<HTMLAnchorElement>
                                ) => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem primary-nav__link'
                            >
                                Admissions
                            </a>
                            <ul className='dropdown'>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Undergraduate
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Graduate
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Continuing education
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Summer studies
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='primary-nav__item'>
                            <a
                                href='#test'
                                onFocus={(
                                    e: React.FocusEvent<HTMLAnchorElement>
                                ) => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem primary-nav__link'
                            >
                                News &#38; Events
                            </a>
                            <ul className='dropdown'>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        News
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Events
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Key dates
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Social media
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='primary-nav__item'>
                            <a
                                href='#test'
                                onFocus={(
                                    e: React.FocusEvent<HTMLAnchorElement>
                                ) => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem primary-nav__link'
                            >
                                Campus
                            </a>
                            <ul className='dropdown'>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Visit us
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Accommodation
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Student Union
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Campus life
                                    </a>
                                </li>
                                <li className='dropdown__item'>
                                    <a
                                        className='dropdownLevelMenuItem dropdown__link'
                                        href='/#'
                                    >
                                        Virtual tour
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Primary;
