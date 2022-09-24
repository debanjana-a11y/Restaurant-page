import item_1 from '../assets/menu/Pav\ Bhaji.jpg';
import item_2 from '../assets/menu/Dhokla.jpg';
import item_3 from '../assets/menu/Poha.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Pav Bhaji',
        price: 50,
        image: item_1
    },
    {
        name: 'Dhokla',
        price: 20,
        image: item_2
    },
    {
        name: 'Poha',
        price: 20,
        image: item_3
    }
];

export default function addWestIndian (id) {
    addDish(id, 'West Indian Cuisine', itemList);
}

