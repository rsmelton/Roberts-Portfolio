const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State-like variable
    let isMobileNavOpen = false;

    // Handlers
    const handleHeaderBtnClick = () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    const handleMobileLinkClick = () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Events
    headerBtn.addEventListener('click', handleHeaderBtnClick);

    mobileLinks.forEach(link => 
        link.addEventListener('click', handleMobileLinkClick)
    );
};

export default mobileNav;