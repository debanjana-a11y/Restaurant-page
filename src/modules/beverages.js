import item_1 from '../assets/menu/Aam\ Panna.jpg';
import item_2 from '../assets/menu/Masala\ Chai.jpg';
import item_3 from '../assets/menu/Lassi.jpg';
import addDish from './utils';

const itemList = [
    {
        name: 'Aam Panna',
        price: 20,
        image: item_1
    },
    {
        name: 'Masala Chai',
        price: 20,
        image: item_2
    },
    {
        name: 'Lassi',
        price: 15,
        image: item_3
    }
];

export default function addBeverages () {
    addDish('Beverages', itemList);
}
