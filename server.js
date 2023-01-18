//Connection to .env file
require('dotenv').config()
//require modules 
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection

const morningController = require('./controllers/morning-setup')
const foodController = require('./controllers/breakfast')

const foodData = require('./utilities/foodData')
const wakeData =  require('./utilities/wakeLogData')
const morningData = require('./utilities/wakeLogData')

//Environments Vars
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

//MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true,  useUnifiedTopology: true,},
    () => console.log('MongoDB connection establish') )

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongodb not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//Routes
app.use('/', morningController);
app.use('/breakfast-Entry', foodController);

//Seeding (put info) into the MongoDB database

app.get('/seed', async (req, res) => {
    //Breakfast data
    await BreakFastFood.deleteMany({});
    await BreakFastFood.insertmany(foodData);

    await DailyMorningLog.deleteMany({});
    await DailyMorningLog.insertmany(morningData);

    await WakingUpLog.deleteMany({});
    await WakingUpLog.insertmany(wakeData);

    res.send('Done with mongo data upload!')
})

///////

app.listen(PORT, () => {
    console.log('This Message means that it is the end of Server.js', PORT)
})