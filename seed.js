const mongoose = require('mongoose')
const Restaurant = require('./model/Resturant')
const connectToDatabase = require('./db')
const dotenv = require('dotenv').config()

connectToDatabase()

const initalData = [{
    name: 'Al Baik',
    isOpen: true,
    address: 'City Centre Road 4650, Manama',
    phone: 55509876
},
{
    name: "Haji's Traditional Cafe",
    isOpen: false,
    address: '150 شارع الحكومة, Manama',
    phone: 6892543
},
{
    name: 'Al Jabriya Turkish Restaurant',
    isOpen: true,
    address: 'Rd No 2643, Busaiteen',
    phone: 17330108
},
{
    name: 'Urban Slice Pizza',
    isOpen: false,
    address: 'Rd No 3421, Manama',
    phone: 43284832
}
];


async function seedResturaunts() {
    try {
        const created = Restaurant.insertMany(initalData)
    } catch (error) {
        console.log('ERROR: ', error)
    }

}


seedResturaunts()