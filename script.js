// Fetch food item data from the API
async function fetchFoodItems() {
    try {
        const response = await fetch('/api/food-items');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        return [];
    }
}

// Initialize the app with the fetched food items
async function initApp() {
    const products = await fetchFoodItems();
    // Rest of your initialization code...
}

initApp();
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PANEER BHURJI',
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'POUSINE CHICKEN',
        image: '2.PNG',
        price: 1000
    },
    {
        id: 3,
        name: 'KARAI VEGETABLE',
        image: '3.PNG',
        price: 2200
    },
    {
        id: 4,
        name: 'SPANISH OMELETTE',
        image: '4.PNG',
        price: 1230
    },
    {
        id: 5,
        name: 'MIXED VEGETABLE',
        image: '5.PNG',
        price: 700
    },
    {
        id: 6,
        name: 'ITALIAN PANEER',
        image: '6.PNG',
        price: 1100
    }
];

let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list card
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.querySelector('.title').innerText.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    });
});