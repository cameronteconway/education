import Primary from './Primary';
import Secondary from './Secondary';

import '../../styles/Navigation.scss';
import {
    toggleNavbarMobile,
    hoverDropdown,
    hoverOutDropdown,
    focusDropdown,
} from '../../util/util';

const Navigation = () => {
    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        // Hide primary nav if click off it
        if (
            !target.classList.contains('topLevelMenuItem') ||
            !target.classList.contains('dropdownLevelMenuItem')
        ) {
            const dropdowns = document.querySelectorAll('.topLevelMenuItem');
            for (let i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].nextElementSibling) {
                    if (
                        dropdowns[i].nextElementSibling?.classList.contains(
                            'show'
                        )
                    ) {
                        dropdowns[i].nextElementSibling?.classList.remove(
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
            mobileNav?.classList.contains('show-mobile') &&
            !(
                target.classList.contains('secondary-nav__icon-expand') ||
                target.classList.contains('secondary-nav__dropdown-icon')
            )
        ) {
            if (
                !(
                    target.classList.contains('mobileListItem') ||
                    target.classList.contains('mobileLevelMenuItem') ||
                    target.classList.contains('mobile-search') ||
                    target.classList.contains('mobile-nav')
                )
            ) {
                const childNodes = navbarToggle?.firstChild as HTMLElement;
                mobileNav.classList.remove('show-mobile');
                childNodes.classList.remove('bi-chevron-double-up');
                childNodes.classList.add('bi-chevron-double-down');
                navbarToggle?.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // When tabbing off the primary menu items, remove any open dropdown
    document.addEventListener('keyup', (e: KeyboardEvent) => {
        const dropdowns = document.querySelectorAll('.topLevelMenuItem');
        const allMenuItems = [];
        for (let i = 0; i < dropdowns.length; i++) {
            allMenuItems.push(dropdowns[i]);
            if (dropdowns[i].nextElementSibling) {
                const dropdownItems =
                    dropdowns[i].nextElementSibling?.querySelectorAll('a');
                for (let j = 0; j < dropdownItems!.length; j++) {
                    allMenuItems.push(dropdownItems![j]);
                }
            }
        }

        if (e.key === 'Tab') {
            const target = e.target as HTMLElement;
            // Primary Navbar
            if (!allMenuItems.includes(target)) {
                for (let i = 0; i < dropdowns.length; i++) {
                    if (dropdowns[i].nextElementSibling) {
                        if (
                            dropdowns[i].nextElementSibling?.classList.contains(
                                'show'
                            )
                        ) {
                            dropdowns[i].nextElementSibling?.classList.remove(
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
                document.activeElement?.classList.contains(
                    'mobileLevelMenuItem'
                ) &&
                document.activeElement !== navbarToggle &&
                document.activeElement !== searchMobile &&
                document.activeElement !== searchMobileSubmit
            ) {
                const childNodes = navbarToggle?.firstChild as HTMLElement;
                mobileNav?.classList.remove('show-mobile');
                childNodes.classList.remove('bi-chevron-double-up');
                childNodes.classList.add('bi-chevron-double-down');
                navbarToggle?.setAttribute('aria-expanded', 'false');
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
                    functionality={[
                        hoverDropdown,
                        hoverOutDropdown,
                        focusDropdown,
                    ]}
                />
            </header>
        </div>
    );
};

export default Navigation;
