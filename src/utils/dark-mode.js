const themeToggler = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    const theme = localStorage.getItem('theme');

    // What this is doing essentially is asking
    // whether or not the theme already exists in 
    // local storage and if it does, then we add the light-mode
    // theme to our body classlist to ensure that the page
    // is light-mode when the user opens the page

    // if theme does not already exist then this line
    // won't even be executed and the page will stay in 
    // dark-mode by default

    // this is also called "On mount" meaning when you
    // first load the page or when you refresh the page
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            // We do this because after removing the light-mode
            // class it leaves an empty class attribute and makes the
            // code look abnormal, so we remove the class attribute
            document.body.removeAttribute('class');
        }
    };
    
    // Events
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click', handleThemeToggle)
    );
};

export default themeToggler;