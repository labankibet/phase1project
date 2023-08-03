let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
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
        price: 120000
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}