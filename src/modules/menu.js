import '../styles/menu.css';
import backBtnPic from '../assets/menu/go-back.jpg';
import addNorthIndian from './northIndian';
import addEastIndian from './eastIndian';
import addSouthIndian from './southIndian';
import addWestIndian from './westIndian';
import addDesserts from './desserts';
import addBeverages from './beverages';

const cuisineType = ['North Indian', 'East Indian', 'South Indian', 'West Indian', 'Desserts', 'Beverages'];

const loadMenuPage = () => {
    const main = document.querySelector('main');

    // clean up older tab display
    main.style.backgroundImage ="none";
    main.innerHTML = "";

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    // Add Menu
    const catalogue = document.createElement('div');
    const info = document.createElement('p');
    info.innerHTML = "Pick your meal today";
    catalogue.appendChild(info);

    const backBtn = document.createElement('button');
    backBtn.classList.add('goBackBtn');
    backBtn.classList.add('inactive');

    const goBack = new Image();
    goBack.src = backBtnPic;
    goBack.alt = "left arrow icon";
    goBack.classList.add('leftArrow');
    backBtn.appendChild(goBack);

    backBtn.addEventListener('click', loadMenuPage);
    menuPage.appendChild(backBtn);

    const menuType = document.createElement('div');
    for(let id = 0; id < cuisineType.length; id++) {
        const element = cuisineType[id];
        const btnCuisine = document.createElement('button');
        btnCuisine.innerText = element;
        btnCuisine.classList.add('menuBtn');
        menuType.appendChild(btnCuisine);
    }

    menuType.classList.add('cuisineType');
    catalogue.appendChild(menuType);
    catalogue.classList.add('catalogue');
    menuPage.appendChild(catalogue);
    main.appendChild(menuPage);

    // Add Individual Menu
    cuisineType.forEach(element => {
        switch(element) {
            case 'North Indian':
                addNorthIndian(0);
                break;
            case 'East Indian':
                addEastIndian(1);
                break;
            case 'South Indian':
                addSouthIndian(2);
                break;
            case 'West Indian':
                addWestIndian(3);
                break;
            case 'Desserts':
                addDesserts(4);
                break;
            case 'Beverages':
                addBeverages(5);
        }
    });

    const menuBtns = document.getElementsByClassName('menuBtn');
    for(let id = 0; id < menuBtns.length; id++) {
        const btnCuisine = menuBtns[id];
        btnCuisine.addEventListener('click', function() {
            const page = document.getElementById(id);
            page.classList.replace('inactive', 'active');
            const goBackBtn = document.getElementsByClassName('goBackBtn')[0];
            goBackBtn.classList.remove('inactive');
        });
    }
};

export {loadMenuPage};
