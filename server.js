//Connection to .env file
require('dotenv').config()
//require modules 
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection

//Controllers that show me the parsed info from the mongoDB database
const morningController = require('./controllers/morning-setup')
const foodController = require('./controllers/breakfast')
const timeController =  require('./controllers/wakeup')

//Information to Parse through to the mongoDB database
const foodData = require('./utilities/foodData')
const wakeLogData =  require('./utilities/wakeLogData')
const morningData = require('./utilities/morningLog')

//Schema (Outline of all information) that is being processed by the two groups above
const breakfastlogs = require('./models/breakfast')
const wholebasicmorninglogs = require('./models/morning-setup')
const timewakingups = require('./models/wakeup')

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
app.use(cors({ origin: '*' }))

//Routes
app.use('/', morningController);
app.use('/', foodController);
app.use('/', timeController);

//Seeding (put info) into the MongoDB database

app.get('/seed', async (req, res) => {
    //Breakfast data
    await breakfastlogs.deleteMany({});
    await breakfastlogs.insertMany(foodData);

    await wholebasicmorninglogs.deleteMany({});
    await wholebasicmorninglogs.insertMany(morningData);

    await timewakingups.deleteMany({});
    await timewakingups.insertMany(wakeLogData);

    res.send('Done with mongo data upload!')
})

////End Program Response

app.listen(PORT, () => {
    console.log('This Message means that it is the end of Server.js', PORT)
})