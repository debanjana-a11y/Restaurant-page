import item_1 from '../assets/menu/Dosa.jpg';
import item_2 from '../assets/menu/Idli.jpg';
import item_3 from '../assets/menu/Hyderabadi\ Biryani.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Dosa',
        price: 45,
        image: item_1
    },
    {
        name: 'Idli',
        price: 35,
        image: item_2
    },
    {
        name: 'Hyderabadi Biryani',
        price: 85,
        image: item_3
    }
];

export default function addSouthIndian (id) {
    addDish(id, 'South Indian Cuisine', itemList);
}
