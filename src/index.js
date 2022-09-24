import {loadDeafultPage} from "./modules/defaultPage";
import {loadHomePage} from "./modules/home";
import {loadMenuPage} from "./modules/menu";
// import {loadContactPage} from "./modules/contact";

loadDeafultPage();
loadHomePage();
// loadMenuPage();
let currentActive = 'Home';

const tabChange = (e) => {
    const linkName = e.target.innerText;
    if (currentActive === linkName) return;
    currentActive = linkName;
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
