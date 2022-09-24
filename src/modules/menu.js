import '../styles/menu.css';
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

    // Add Menu
    const catalogue = document.createElement('div');
    const info = document.createElement('p');
    info.innerHTML = "Pick your meal today";
    catalogue.appendChild(info);

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
    main.appendChild(catalogue);

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
        });
    }
};

export {loadMenuPage};
