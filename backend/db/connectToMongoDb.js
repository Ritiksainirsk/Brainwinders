
const mongoose = require('mongoose')

const connectToMongoDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected To Mongodb")
    } catch (error) {
        console.log("Error  connecting to mongodb",error.message)
    }
} 

module.exports = connectToMongoDb;