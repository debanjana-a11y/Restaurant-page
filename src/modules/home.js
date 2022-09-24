import '../styles/home.css';
import logo from "../assets/home/logo_1.png";

const loadHomePage = () => {
    const intro = document.getElementsByClassName('introduction')[0];
    intro.innerHTML="";
    const resturantLogo = new Image();
    resturantLogo.src = logo;
    intro.appendChild(resturantLogo);

    const greetings = document.createElement('p');
    greetings.classList.add('welcomeMessage');

    intro.appendChild(greetings);
};

export {loadHomePage};
