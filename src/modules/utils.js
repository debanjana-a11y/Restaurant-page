export default function addDish (id, dishType, itemList) {
    const menuPage = document.getElementsByClassName('menu')[0];
    
    const menuList = document.createElement('div');
    menuList.id = id;
    menuList.classList.add('menuList');
    menuList.classList.add('inactive');
    const heading = document.createElement('h2');
    heading.innerText = dishType;  
    const menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    itemList.forEach(item => {
        const dish = document.createElement('div');
        dish.classList.add('dish');
        
        // Add Image
        const img = new Image();
        img.src = item.image;
        img.alt = 'picture of food';

        // Add informations about dish
        const info = document.createElement('div');
        info.classList.add('dishInfo');
        const dishName = document.createElement('p');
        dishName.innerText = item.name;
        const price = document.createElement('p');
        price.innerText = `Rs ${item.price}/-`;
        info.appendChild(dishName);
        info.appendChild(price);

        // Add Order button
        const orderBtn = document.createElement('button');
        orderBtn.innerText = 'Order';
        orderBtn.classList.add('order');

        dish.appendChild(img);
        dish.appendChild(info);
        dish.appendChild(orderBtn);

        menuBox.appendChild(dish);
    });

    menuList.appendChild(heading);
    menuList.appendChild(menuBox);
    menuPage.appendChild(menuList);
}
