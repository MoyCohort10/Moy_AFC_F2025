const menuItems = [
    {
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta with a rich meat sauce.",
        price: 12.99,
        image: "https://via.placeholder.com/200?text=Spaghetti"
    },
    {
        name: "Grilled Chicken Salad",
        description: "Fresh greens topped with juicy grilled chicken.",
        price: 10.5,
        image: "https://via.placeholder.com/200?text=Salad"
    },
    {
        name: "Veggie Pizza",
        description: "Cheesy pizza loaded with seasonal vegetables.",
        price: 9,
        image: "https://via.placeholder.com/200?text=Pizza"
    }
];

let currentIndex = 0;

const imgEl = document.getElementById('menu-img');
const nameEl = document.getElementById('menu-name');
const descEl = document.getElementById('menu-description');
const priceEl = document.getElementById('menu-price');

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function updateDisplay() {
    const item = menuItems[currentIndex];
    imgEl.src = item.image;
    imgEl.alt = item.name;
    nameEl.textContent = item.name;
    descEl.textContent = item.description;
    priceEl.textContent = formatPrice(item.price);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    updateDisplay();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    updateDisplay();
}

document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('next-btn').addEventListener('click', nextImage);

// Initial display
updateDisplay();