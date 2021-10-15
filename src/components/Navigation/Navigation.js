import React from 'react';
import Primary from './Primary';
import Secondary from './Secondary';

import './Navigation.css';
import {
    toggleNavbarMobile,
    hoverDropdown,
    hoverOutDropdown,
    focusDropdown,
} from '../../util/util';

const Navigation = () => {
    document.addEventListener('click', e => {
        // Hide primary nav if click off it
        if (
            !e.target.classList.contains('topLevelMenuItem') ||
            !e.target.classList.contains('dropdownLevelMenuItem')
        ) {
            const dropdowns = document.querySelectorAll('.topLevelMenuItem');
            for (let i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].nextElementSibling) {
                    if (
                        dropdowns[i].nextElementSibling.classList.contains(
                            'show'
                        )
                    ) {
                        dropdowns[i].nextElementSibling.classList.remove(
                            'show'
                        );
                    }
                }
            }
        }

        // Hide mobile nav if click off it
        const mobileNav = document.querySelector('.mobile-nav');
        const navbarToggle = document.querySelector('#navbar-toggle');
        if (
            mobileNav.classList.contains('show-mobile') &&
            !(
                e.target.classList.contains('icon-expand') ||
                e.target.classList.contains('dropdown-icon')
            )
        ) {
            if (
                !(
                    e.target.classList.contains('mobileListItem') ||
                    e.target.classList.contains('mobileLevelMenuItem') ||
                    e.target.classList.contains('mobile-search') ||
                    e.target.classList.contains('mobile-nav')
                )
            ) {
                mobileNav.classList.remove('show-mobile');
                navbarToggle.childNodes[0].classList.remove(
                    'bi-chevron-double-up'
                );
                navbarToggle.childNodes[0].classList.add(
                    'bi-chevron-double-down'
                );
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // When tabbing off the primary menu items, remove any open dropdown
    document.addEventListener('keyup', e => {
        const dropdowns = document.querySelectorAll('.topLevelMenuItem');
        const allMenuItems = [];
        for (let i = 0; i < dropdowns.length; i++) {
            allMenuItems.push(dropdowns[i]);
            if (dropdowns[i].nextElementSibling) {
                const dropdownItems =
                    dropdowns[i].nextElementSibling.querySelectorAll('a');
                for (let j = 0; j < dropdownItems.length; j++) {
                    allMenuItems.push(dropdownItems[j]);
                }
            }
        }

        if (e.key === 'Tab') {
            // Primary Navbar
            if (!allMenuItems.includes(e.target)) {
                for (let i = 0; i < dropdowns.length; i++) {
                    if (dropdowns[i].nextElementSibling) {
                        if (
                            dropdowns[i].nextElementSibling.classList.contains(
                                'show'
                            )
                        ) {
                            dropdowns[i].nextElementSibling.classList.remove(
                                'show'
                            );
                        }
                    }
                }
            }

            // Mobile Navbar focus off dropdown
            const navbarToggle = document.querySelector('#navbar-toggle');
            const mobileNav = document.querySelector('.mobile-nav');
            const searchMobile = document.querySelector('#searchq-mobile');
            const searchMobileSubmit = document.querySelector(
                '#searchq-mobile-submit'
            );

            if (
                !document.activeElement.classList.contains(
                    'mobileLevelMenuItem'
                ) &&
                document.activeElement !== navbarToggle &&
                document.activeElement !== searchMobile &&
                document.activeElement !== searchMobileSubmit
            ) {
                mobileNav.classList.remove('show-mobile');
                navbarToggle.childNodes[0].classList.remove(
                    'bi-chevron-double-up'
                );
                navbarToggle.childNodes[0].classList.add(
                    'bi-chevron-double-down'
                );
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    return (
        <div id='head-nav'>
            <a href='#content' className='skip-to-content'>
                Skip to content
            </a>
            <header>
                <Secondary toggleNavbarMobile={toggleNavbarMobile} />
                <Primary
                    hoverDropdown={hoverDropdown}
                    hoverOutDropdown={hoverOutDropdown}
                    focusDropdown={focusDropdown}
                />
            </header>
        </div>
    );
};

export default Navigation;
