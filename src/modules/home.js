import '../styles/home.css';
import logo from "../assets/home/logo_1.png";

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('navBar');
    header.innerHTML = `
        <div class="hamburgerMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul>
            <li class="list_item">Home</li>
            <li class="list_item">Menu</li>
            <li class="list_item">Contact</li>
        </ul>`;
    return header;
};

const createMain = () => {
    const main = document.createElement('main');
    main.innerHTML =
    `<div class="rightPane">
        <div class="introduction">
        </div>
    </div>`;
    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML =
    `<span>Icon/Image credit: <a href="https://www.flaticon.com" target="_blank">flaticon.com</a></span> 
     <span>Copyright &copy Debanjana</span>`;
    return footer;
};

const loadHomePage = () => {
    const myDiv = document.getElementById('content');
    myDiv.appendChild(createHeader());
    myDiv.appendChild(createMain());
    myDiv.appendChild(createFooter());

    const intro = document.getElementsByClassName('introduction')[0];

    const resturantLogo = new Image();
    resturantLogo.src = logo;
    intro.appendChild(resturantLogo);

    const greetings = document.createElement('p');
    greetings.classList.add('welcomeMessage');

    intro.appendChild(greetings);
};

export {loadHomePage};
