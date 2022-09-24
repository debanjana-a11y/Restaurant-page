import item_1 from '../assets/menu/Steamed\ Hilsa.jpg';
import item_2 from '../assets/menu/Fish\ Curry.jpg';
import item_3 from '../assets/menu/Momos.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Steamed Hilsa',
        price: 100,
        image: item_1
    },
    {
        name: 'Fish Curry',
        price: 60,
        image: item_2
    },
    {
        name: 'Momos',
        price: 40,
        image: item_3
    }
];

export default function addEastIndian (id) {
    addDish(id, 'East Indian Cuisine', itemList);
}