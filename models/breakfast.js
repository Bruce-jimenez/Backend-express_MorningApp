const mongoose = require('mongoose')

const breakSchema = new mongoose.Schema({
    Main: String,
    Side: String,
    Drink: String
});

const breakFast = new mongoose.Schema('Breakfast log', breakSchema);

module.exports = breakFast;