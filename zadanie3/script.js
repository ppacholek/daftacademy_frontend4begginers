const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const pageNavigation = document.querySelector('.page-navigation');

hamburgerMenuButton.addEventListener('click', (e) => {
    if (pageNavigation.classList.contains('hidden-on-mobile')) {
        pageNavigation.classList.remove('hidden-on-mobile')
    } else {
        pageNavigation.classList.add('hidden-on-mobile')
    }
})

const concertsSection = document.querySelector('.concerts');

concertsSection.addEventListener('click', (e) => {
    if (event.target.classList.contains('button')) {
        const haveFunText = document.createElement("span");
        haveFunText.innerHTML = "Have fun!";
        
        const button = event.target;
        button.parentNode.replaceChild(haveFunText, button)
    }
})