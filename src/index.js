import {loadDeafultPage} from "./modules/defaultPage";
import {loadHomePage} from "./modules/home";
import {loadMenuPage} from "./modules/menu";
import {loadContactPage} from "./modules/contact";

loadDeafultPage();
loadHomePage();
let currentActiveLink = document.getElementsByClassName('homeLink')[0];
currentActiveLink.classList.add('list-active');

const tabChange = (e) => {
    const linkName = e.target.innerText;
    if (currentActiveLink.innerText === linkName) return;
    currentActiveLink.classList.remove('list-active');
    currentActiveLink = e.target;
    console.log(linkName);
    currentActiveLink.classList.add('list-active');
    switch(linkName) {
        case 'Home':
            loadHomePage();
            break;
        case 'Menu':
            loadMenuPage();
            break;
        default:
            loadContactPage();
    }
}

const navLinks = document.querySelectorAll('.list_item');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', tabChange);
});
