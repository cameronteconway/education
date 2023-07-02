export const toggleNavbarMobile = (
    e: React.MouseEvent<HTMLButtonElement>
): void => {
    const mobileNavbar: Element | null = document.querySelector('.mobile-nav');
    const navbarToggle: Element | null =
        document.querySelector('#navbar-toggle');
    let isNavbarExpanded: boolean =
        navbarToggle?.getAttribute('aria-expanded') === 'true';
    isNavbarExpanded = !isNavbarExpanded;

    // If e.target is the toggle button (tabbed) else is the icon (clicked via mouse)
    const target = e.target as HTMLButtonElement;
    const childNodes = target.firstChild as HTMLElement;
    if (target === navbarToggle) {
        target.setAttribute('aria-expanded', String(isNavbarExpanded));
        if (isNavbarExpanded) {
            mobileNavbar?.classList.add('show-mobile');
            childNodes.classList.remove('bi-chevron-double-down');
            childNodes.classList.add('bi-chevron-double-up');
        } else {
            mobileNavbar?.classList.remove('show-mobile');
            childNodes.classList.remove('bi-chevron-double-up');
            childNodes.classList.add('bi-chevron-double-down');
        }
    } else {
        target.parentElement?.setAttribute(
            'aria-expanded',
            String(isNavbarExpanded)
        );
        if (isNavbarExpanded) {
            mobileNavbar?.classList.add('show-mobile');
            target.classList.remove('bi-chevron-double-down');
            target.classList.add('bi-chevron-double-up');
        } else {
            mobileNavbar?.classList.remove('show-mobile');
            target.classList.remove('bi-chevron-double-up');
            target.classList.add('bi-chevron-double-down');
        }
    }
};

export const hoverDropdown = (): void => {
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is hovered, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling?.classList.contains('show')) {
                dropdowns[i].nextElementSibling?.classList.remove('show');
            }
        }
    }
};

export const hoverOutDropdown = (): void => {
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is hovered out, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling?.classList.contains('show')) {
                dropdowns[i].nextElementSibling?.classList.remove('show');
            }
        }
    }
};

export const focusDropdown = (e: React.FocusEvent<HTMLAnchorElement>): void => {
    console.log(e);
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is focused, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling?.classList.contains('show')) {
                dropdowns[i].nextElementSibling?.classList.remove('show');
            }
        }
    }

    // If e.target has a drodpown/mega-menu add class 'show'
    if (e.target.nextElementSibling) {
        const dropdown = e.target.nextElementSibling;
        dropdown.classList.add('show');
    }
};
