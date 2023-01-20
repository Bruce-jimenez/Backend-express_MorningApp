const express = require('express');
const router = express.Router();
const wakeup = require('../models/wakeup')

//Index
router.get('/wake/', (req, res) => {
    wakeup.find({}, (err, foundWakeLog) => {
        res.json(foundWakeLog);
    });
});

//Delete
router.delete('/wake/:id', (req, res) => {
    wakeup.findByIdAndRemove(req.params.id, (err, deletedWakeLog) => {
        res.json(deletedWakeLog);
    });
});

//Updated
router.put('/wake/:id', (req,res) => {
    wakeup.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWakeLogs) => {
        res.json(updatedWakeLogs);
    });
});

//Create
router.post('/wake/', (req, res) => {
    wakeup.create(req.body, (err, createdWakeLogs) => {
        res.json(createdWakeLogs);
    });
});

//Show
router.get('/wake/:id', (req, res) => {
    wakeup.findByID(req.params.id, (err, foundWakeLogs) => {
        res.json(foundWakeLogs);
    });
});


module.exports = router;