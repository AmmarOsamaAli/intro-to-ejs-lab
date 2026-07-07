const mongoose = require('mongoose')

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
        console.log("Connected to Database!")
    } catch (error) {
        console.log("Connection Failed: ", error)
    }
}

module.exports = connectToDatabase