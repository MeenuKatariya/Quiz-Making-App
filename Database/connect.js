const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost");
        console.log('connected to database');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};