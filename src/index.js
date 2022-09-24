import {loadHomePage} from "./modules/home";

loadHomePage();

const tabChange = (e) => {
    const linkName = e.target.innerText;
    switch(linkName) {
        case 'Home':
            loadHomePage();
            break;
        case 'Menu':
            // loadMenuPage();
            break;
        default:
            // loadContactPage();
    }
};

const navLinks = document.querySelectorAll('.list_item');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', tabChange);
});
