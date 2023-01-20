const foodData = require('./foodData')
const wakeLogData = require('./wakeLogData')

const morningLog = [
   { wakingTimer: [wakeLogData[0], wakeLogData[1]] },
   { foodLog: [foodData[0], foodData[1]] }
]

module.exports = morningLog