const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const pageNavigation = document.querySelector('.page-navigation');

hamburgerMenuButton.addEventListener('click', (e) => {
    if (pageNavigation.classList.contains('hidden-on-mobile')) {
        pageNavigation.classList.remove('hidden-on-mobile')
    } else {
        pageNavigation.classList.add('hidden-on-mobile')
    }
})