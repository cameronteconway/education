import React from 'react';

const Primary = ({ hoverDropdown, hoverOutDropdown, focusDropdown }) => {
    return (
        <div className='primary-nav'>
            <div className='wrapper'>
                <a href='#test' className='logo'>
                    <h1>CTEC</h1>
                </a>
                <nav id='primary-nav'>
                    <ul className='nav-content'>
                        <li>
                            <a
                                href='#test'
                                onFocus={e => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem'
                            >
                                About
                            </a>
                            <ul className='dropdown'>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        History
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Facts &#38; figures
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Vision &#38; values
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Maps &#38; directions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Campuses
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href='#test'
                                onFocus={e => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem'
                            >
                                Research
                            </a>
                            <div className='mega-menu'>
                                <div className='content'>
                                    <div className='row'>
                                        <ul className='mega-links'>
                                            <li className='mega-link-col-title'>
                                                Our Research
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Research impact
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Public engagement
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Case studies
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Digital research
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='row'>
                                        <ul className='mega-links'>
                                            <li className='mega-link-col-title'>
                                                Explore
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Libraries
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Support for researchers
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Contact research
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='row'>
                                        <ul className='mega-links'>
                                            <li className='mega-link-col-title'>
                                                Browse By
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Research by school
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Research by faculty
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
                                                    href='/#'
                                                >
                                                    Research by academic
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className='dropdownLevelMenuItem'
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
                        <li>
                            <a
                                href='#test'
                                onFocus={e => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem'
                            >
                                Admissions
                            </a>
                            <ul className='dropdown'>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Undergraduate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Graduate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Continuing education
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Summer studies
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href='#test'
                                onFocus={e => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem'
                            >
                                News &#38; Events
                            </a>
                            <ul className='dropdown'>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Key dates
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Social media
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href='#test'
                                onFocus={e => focusDropdown(e)}
                                onMouseOver={() => hoverDropdown()}
                                onMouseOut={() => hoverOutDropdown()}
                                className='topLevelMenuItem'
                            >
                                Campus
                            </a>
                            <ul className='dropdown'>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Visit us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Accommodation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Student Union
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
                                        href='/#'
                                    >
                                        Campus life
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='dropdownLevelMenuItem'
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
