const mongoose = require('mongoose')

const resturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        unique: true
    },
    isOpen: {
        type: Boolean,
        default: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    }
}, { timestamps: true })

const Resturant = mongoose.model('Resturant', resturantSchema)

module.exports = Resturant