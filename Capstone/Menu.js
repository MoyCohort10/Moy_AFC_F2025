const menu = [
    {
        name: "Jasmine Rice",
        description: "This is the best rice in the world ",
        price: 0,
        image: "https://downshiftology.com/wp-content/uploads/2023/10/Cilantro-Lime-Rice-main-500x500.jpg"
    },
    {
        name: "Chicken",
        description: "This is the best chicken in the world ",
        price: 5.00,
        image: "https://www.allrecipes.com/thmb/AmCFR3W2ZyRhR0ZVZO0yvswxhpY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-2444188-copycat-chipolte-chicken-DDMFS-4x3-19e5e4d4651346d98ebb888554aa587c.jpg"
    },
    {
        name: "Black Beans",
        description: "This is the best black beans in the world ",
        price: 0,
        image:"https://www.budgetbytes.com/wp-content/uploads/2010/06/Quick-Seasoned-Black-Beans-finished.jpg"
    },
    {
        name: "Lettuce",
        description: "This is the best lettuce in the world ",
        price: 0,
        image: "https://www.bhg.com/thmb/h1QeimWyOK7HjCODm1eL39TAC3w=/4000x0/filters:no_upscale():strip_icc()/bhg-recipe-salads-american-classics-chopped-salad-Step-05-8f5b68ac34294eb5856e8f298f793751.jpg"
    },
    {
        name: "Guac",
        description: "This is the best Guac in the world ",
        price: 4.00,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/guacamole-recipe.jpg"
    },
];

const itemImage = document.getElementById("menu-img")
const itemName = document.getElementById("menuName")
const ItemDescription = document.getElementById("menuDescription")
const itemPrice = document.getElementById("menuPrice")



function display(index) {
    const item = menu[index];
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemName.textContent = item.name;
    ItemDescription.textContent = item.description;
    itemPrice.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(item.price);
}

//this is the initial page that it will start on
let page = 0;

//this is the function for the previous image
function prevImage() {
    page = (page - 1 + menu.length) % menu.length;
    display(page);
}

// this is the function for the next image
function nextImage() {
    page = (page + 1) % menu.length;
    display(page);
}

document.getElementById("btnPrev").addEventListener("click", prevImage);
document.getElementById("btnNext").addEventListener("click", nextImage);

// Display first item on load
display(page);


