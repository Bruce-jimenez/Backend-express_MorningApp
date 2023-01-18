const mongoose = require('mongoose')

const wakeSchema = new mongoose.Schema({
   Date: date.toLocaleDateString(), 
   Time: date.toLocaleTimeString(),
   Emotion: String
});

const wakeUp = new mongoose.model('Time Waking Up', wakeSchema);

module.exports = wakeUp;