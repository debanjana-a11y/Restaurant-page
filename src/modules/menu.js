import '../styles/menu.css';
// import '../assets/menu/*.jpg';
import beverage1 from '../assets/menu/Aam\ Panna.jpg';
import beverage2 from '../assets/menu/Masala\ Chai.jpg';
import beverage3 from '../assets/menu/Lassi.jpg';

import addNorthIndian from './northIndian';
import addEastIndian from './eastIndian';
import addSouthIndian from './southIndian';
import addWestIndian from './westIndian';
import addDesserts from './desserts';
import addBeverages from './beverages';

const cusineType = ['North Indian', 'East Indian', 'South Indian', 'West Indian', 'Desserts', 'Beverages'];

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

    const cuisineType = document.createElement('div');
    cusineType.forEach(element => {
        const btnCuisine = document.createElement('button');
        btnCuisine.innerText = element;
        btnCuisine.classList.add('menuBtn');
        cuisineType.appendChild(btnCuisine);
    });

    cuisineType.classList.add('cuisineType');
    catalogue.appendChild(cuisineType);
    catalogue.classList.add('catalogue');
    main.appendChild(catalogue);

    // Add Individual Menu
    cusineType.forEach(element => {
        switch(element) {
            case 'North Indian':
                addNorthIndian();
                break;
            case 'East Indian':
                addEastIndian();
                break;
            case 'South Indian':
                addSouthIndian();
                break;
            case 'West Indian':
                addWestIndian();
                break;
            case 'Desserts':
                addDesserts();
                break;
            case 'Beverages':
                addBeverages();
        }
    });
};

export {loadMenuPage};
