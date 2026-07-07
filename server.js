const express = require('express')
const mongoose = require('mongoose')
const connectToDatabase = require('./db')
const dotenv = require('dotenv').config()
const Resturant = require('./model/Resturant')


const app = express()

connectToDatabase()



app.get('/', (req, res) => {
    res.render('homepage.ejs')
})


app.get('/resturants', async (req, res) => {
    const foundResturnats = await Resturant.find()
    res.render('all-resturants.ejs', { resturants: foundResturnats })
})


app.get('/resturants/:resturantsId', async (req, res) => {
    const foundResturnat = await Resturant.findById(req.params.resturantsId)
    console.log(foundResturnat)
    res.render('resturant-details.ejs', { resturants: foundResturnat })
})



app.listen(3000, () => {
    console.log("App is Running")
})