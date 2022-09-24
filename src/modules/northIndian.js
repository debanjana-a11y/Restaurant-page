import item_1 from '../assets/menu/Aloo\ Paratha.jpg';
import item_2 from '../assets/menu/Chana\ Masala.jpg';
import item_3 from '../assets/menu/Paneer\ Butter\ Masala.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Aloo Paratha',
        price: 95,
        image: item_1
    },
    {
        name: 'Chana Masala',
        price: 50,
        image: item_2
    },
    {
        name: 'Paneer Butter Masala',
        price: 70,
        image: item_3
    }
];

export default function addNorthIndian (id) {
    addDish(id, 'North Indian Cuisine', itemList);
}