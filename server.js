const express = require('express')

const app = express()

const resturants = require('./data')


app.get('/', (req, res) => {
    res.render('homepage.ejs')
})


app.get('/resturants', (req, res) => {
    res.render('all-resturants.ejs', { resturants })
})


app.get('/resturants/:resturantsId', (req, res) => {
    const foundResturnat = resturants.find(oneResturants => {
        return oneResturants.id === Number(req.params.resturantsId)
    })
    res.render('resturant-details.ejs', { resturants: foundResturnat , menu : foundResturnat.menu })
})



app.listen(3000, () => {
    console.log("App is Running")
})