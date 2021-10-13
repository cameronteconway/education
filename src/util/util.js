export const toggleNavbarMobile = e => {
    const mobileNavbar = document.querySelector('.mobile-nav');
    const navbarToggle = document.querySelector('#navbar-toggle');
    let isNavbarExpanded =
        navbarToggle.getAttribute('aria-expanded') === 'true';
    isNavbarExpanded = !isNavbarExpanded;

    // If e.target is the toggle button (tabbed) else is the icon (clicked via mouse)
    if (e.target === navbarToggle) {
        e.target.setAttribute('aria-expanded', isNavbarExpanded);
        if (isNavbarExpanded) {
            mobileNavbar.classList.add('show-mobile');
            e.target.childNodes[0].classList.remove('bi-chevron-double-down');
            e.target.childNodes[0].classList.add('bi-chevron-double-up');
        } else {
            mobileNavbar.classList.remove('show-mobile');
            e.target.childNodes[0].classList.remove('bi-chevron-double-up');
            e.target.childNodes[0].classList.add('bi-chevron-double-down');
        }
    } else {
        e.target.parentElement.setAttribute('aria-expanded', isNavbarExpanded);
        if (isNavbarExpanded) {
            mobileNavbar.classList.add('show-mobile');
            e.target.classList.remove('bi-chevron-double-down');
            e.target.classList.add('bi-chevron-double-up');
        } else {
            mobileNavbar.classList.remove('show-mobile');
            e.target.classList.remove('bi-chevron-double-up');
            e.target.classList.add('bi-chevron-double-down');
        }
    }
};

export const hoverDropdown = () => {
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is hovered, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling.classList.contains('show')) {
                dropdowns[i].nextElementSibling.classList.remove('show');
            }
        }
    }
};

export const hoverOutDropdown = () => {
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is hovered out, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling.classList.contains('show')) {
                dropdowns[i].nextElementSibling.classList.remove('show');
            }
        }
    }
};

export const focusDropdown = e => {
    const dropdowns = document.querySelectorAll('.topLevelMenuItem');
    // When dropdown nav item is focused, close all dropdowns if they have the class 'show'
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].nextElementSibling) {
            if (dropdowns[i].nextElementSibling.classList.contains('show')) {
                dropdowns[i].nextElementSibling.classList.remove('show');
            }
        }
    }

    // If e.target has a drodpown/mega-menu add class 'show'
    if (e.target.nextElementSibling) {
        const dropdown = e.target.nextElementSibling;
        dropdown.classList.add('show');
    }
};
