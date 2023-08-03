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