const mongoose = require('mongoose')
const wakeUp = require('./wakeup')
const breakFast = require('./breakfast')

const morningSchema = new mongoose.Schema({
    wakeUp,
    breakFast
});

const MorningLog = new mongoose.model('Whole basic Morning Log', morningSchema);

module.exports = MorningLog;