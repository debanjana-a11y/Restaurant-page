import '../styles/defaultPage.css';

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('navBar');
    header.innerHTML = `
        <div class="hamburgerMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul>
            <li class="list_item">Home</li>
            <li class="list_item">Menu</li>
            <li class="list_item">Contact</li>
        </ul>`;
    return header;
};

const createMain = () => {
    const main = document.createElement('main');
    main.innerHTML =
    `<div class="rightPane">
        <div class="introduction">
        </div>
    </div>`;
    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML =
    `<span>Icon/Image credit: <a href="https://www.flaticon.com" target="_blank">flaticon.com</a></span> 
     <span>Copyright &copy Debanjana</span>`;
    return footer;
};

const loadDeafultPage = () => {
    const myDiv = document.getElementById('content');
    myDiv.appendChild(createHeader());
    myDiv.appendChild(createMain());
    myDiv.appendChild(createFooter());
};

export {loadDeafultPage};
