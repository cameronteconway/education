import React from 'react';

const Secondary = ({ toggleNavbarMobile }) => {
    return (
        <div className='secondary-nav'>
            <div className='wrapper'>
                <div className='content'>
                    <a href='/#' className='logo'>
                        CTEC
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href='/#'>Coronavirus</a>
                            </li>
                            <li>
                                <a href='/#'>Students</a>
                            </li>
                            <li>
                                <a href='/#'>Staff</a>
                            </li>
                            <li>
                                <a href='/#'>Alumni</a>
                            </li>
                            <li>
                                <a href='/#'>Community</a>
                            </li>
                        </ul>
                    </nav>
                    <form className='search-form'>
                        <div role='search'>
                            <label htmlFor='searchq'>Search</label>
                            <input
                                type='text'
                                id='searchq'
                                name='search-query'
                                placeholder='Search'
                                required
                                title='Search site'
                            />
                            <button
                                className='icon-search'
                                type='submit'
                                name='submit-search'
                                aria-label='Submit search'
                            >
                                <i className='bi bi-search'></i>
                            </button>
                        </div>
                    </form>
                    <button
                        id='navbar-toggle'
                        type='button'
                        className='icon-expand'
                        controls='navbar-menu'
                        aria-label='Toggle menu'
                        aria-expanded='false'
                        onClick={e => toggleNavbarMobile(e)}
                    >
                        <i className='dropdown-icon bi bi-chevron-double-down'></i>
                    </button>
                </div>
                <div className='mobile-nav fade-in'>
                    <nav>
                        <ul>
                            <li className='mobileListItem'>
                                <a className='mobileLevelMenuItem' href='/#'>
                                    About
                                </a>
                            </li>
                            <li className='mobileListItem'>
                                <a className='mobileLevelMenuItem' href='/#'>
                                    Research
                                </a>
                            </li>
                            <li className='mobileListItem'>
                                <a className='mobileLevelMenuItem' href='/#'>
                                    Admissions
                                </a>
                            </li>
                            <li className='mobileListItem'>
                                <a className='mobileLevelMenuItem' href='/#'>
                                    News &#38; Events
                                </a>
                            </li>
                            <li className='mobileListItem'>
                                <a className='mobileLevelMenuItem' href='/#'>
                                    Campus
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <form className='search-form'>
                        <div role='search'>
                            <label htmlFor='searchq-mobile'>Search</label>
                            <input
                                type='text'
                                id='searchq-mobile'
                                name='search-query'
                                placeholder='Search'
                                required
                                title='Search site'
                                className='mobile-search'
                            />
                            <button
                                id='searchq-mobile-submit'
                                className='icon-search mobile-search'
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
