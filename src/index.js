import {createHeader, createMain, createFooter, loadDefaultPage, loadHomePage} from "./modules/home";

const myDiv = document.getElementById('content');
myDiv.appendChild(createHeader());
myDiv.appendChild(createMain());
myDiv.appendChild(createFooter());

loadDefaultPage();

const tabChange = (e) => {
    const linkName = e.target.innerText;
    switch(linkName) {
        case 'Home':
            // loadHomePage();
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
