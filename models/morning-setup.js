const mongoose = require('mongoose');
const BreakFast = require('./breakfast');
const wakeUp = require('./wakeup');

const morningSchema = new mongoose.Schema({
    wakingTimer: [wakeUp.schema],
    foodLog: [BreakFast.schema]
});

const MorningLog = mongoose.model('wholebasicmorninglogs', morningSchema);

module.exports = MorningLog;