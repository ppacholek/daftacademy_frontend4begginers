// Hamburger menu
const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const pageNavigation = document.querySelector('.page-navigation');

hamburgerMenuButton.addEventListener('click', (event) => {
    const button = document.querySelector('.hamburger-menu-button');
    button.classList.toggle('isX');
    if (pageNavigation.classList.contains('hidden-on-mobile')) {
        pageNavigation.classList.remove('hidden-on-mobile');
    } else {
        pageNavigation.classList.add('hidden-on-mobile');
    }
})

// Concert section buttons
const concertsSection = document.querySelector('.concerts');

concertsSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        const haveFunText = document.createElement("span");
        haveFunText.classList.add('have-fun-text')
        haveFunText.innerHTML = "Have fun!";
        
        const button = event.target;
        button.parentNode.replaceChild(haveFunText, button);
    }
})

// Submitting a form
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const fields = Object.fromEntries(formData.entries());
    console.log(fields);
})

// adding a class to image after mouse leaves it
const images = document.querySelectorAll('.gallery__image');
images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.reove('change-color');
        });

        image.addEventListener('mouseleave', () => {
            image.classList.add('change-color');
        });
});
