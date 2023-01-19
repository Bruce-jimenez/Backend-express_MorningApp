const mongoose = require('mongoose');

const breakSchema = new mongoose.Schema({
    main: String,
    side: String,
    drink: String
});

const breakFast = mongoose.model('breakfastlogs', breakSchema);

module.exports = breakFast;