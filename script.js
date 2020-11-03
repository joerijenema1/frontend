    const navSlide = () => {
        const burger = document.querySelector('.hamburgericon');
        const nav = document.querySelector('.opmaaknavmenu');
        const navLinks = document.querySelectorAll('.nav-links li')
        //nav inkomen
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }
    navSlide();
