const mongoose = require('mongoose');

const wakeSchema = new mongoose.Schema({
   date: { type: Date, default: Date.now },
   time: String,
   emotion: String
});

const wakeup = mongoose.model('timewakingups', wakeSchema);

module.exports = wakeup;