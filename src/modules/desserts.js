import item_1 from '../assets/menu/Rasgulla.jpg';
import item_2 from '../assets/menu/Gulab\ Jamun.jpg';
import item_3 from '../assets/menu/Rasmalai.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Rasgulla',
        price: 15,
        image: item_1
    },
    {
        name: 'Gulab Jamun',
        price: 15,
        image: item_2
    },
    {
        name: 'Rasmalai',
        price: 20,
        image: item_3
    }
];

export default function addDesserts (id) {
    addDish(id, 'Desserts', itemList);
}
