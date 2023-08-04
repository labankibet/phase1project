const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    // Food item data goes here...
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

// Endpoint to fetch all food items
app.get('/api/food-items', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
