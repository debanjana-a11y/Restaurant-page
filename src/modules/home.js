import '../styles/home.css';
import logo from "../assets/home/logo_1.png";
import bg from '../assets/home/bg_1.jpg';

const loadHomePage = () => {
    const main = document.querySelector('main');
    // clean up older tab display
    main.innerHTML = "";

    const homePage = document.createElement('div');
    homePage.classList.add('home');
    
    const rightPane = document.createElement('div');
    rightPane.classList.add('rightPane');
    const intro = document.createElement('div');
    intro.classList.add('introduction');
    const resturantLogo = new Image();
    resturantLogo.src = logo;
    intro.appendChild(resturantLogo);

    const greetings = document.createElement('p');
    greetings.classList.add('welcomeMessage');

    intro.appendChild(greetings);

    rightPane.appendChild(intro);
    homePage.appendChild(rightPane);
    main.appendChild(homePage);
};

export {loadHomePage};
