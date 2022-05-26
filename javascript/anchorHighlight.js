const headers = document.querySelectorAll('header');
const navLi = document.querySelectorAll('ul.navigation li');

let previousSelect = null;

window.addEventListener('scroll', () => {
    let current = '';

    headers.forEach( header => {
        const headerTop = header.offsetTop;

        if (pageYOffset + 20 >= headerTop) {
            current = header.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        if (li.dataset.link === current) {
            previousSelect?.classList.remove('active');
            li.classList.add('active');
            previousSelect = li;
        }

    })

}, {passive: true})
