const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    // const headerLinks = document.querySelectorAll('header__link');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    const media = window.matchMedia("(min-width: 768px)");

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

    // const handleHeaderLinkClick = () => {
    //     isMobileNavOpen = false;
    //     document.body.style.overflow = 'auto';
    // };

    const handleMobileLinkClick = () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Events
    headerBtn.addEventListener('click', handleHeaderBtnClick);

    // headerLinks.forEach(link => 
    //     link.addEventListener('click', handleHeaderLinkClick)
    // );

    mobileLinks.forEach(link => 
        link.addEventListener('click', handleMobileLinkClick)
    );

    media.addEventListener('change', () => {
        if (media.matches) {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
};

export default mobileNav;