const express = require('express');
const router = express.Router();
const wakeLogs = require('../models/wakeup')

//Index
router.get('/wake', (req, res) => {
    wakeLogs.find({}, (err, foundWakeLog) => {
        res.json(foundWakeLogs);
    });
});

//Delete
router.delete('/wake/:id', (req, res) => {
    wakeLogs.findByIdAndRemove(req.params.id, (err, deletedWakeLog) => {
        res.json(deletedWakeLog);
    });
});

//Updated
router.put('/wake/:id', (req,res) => {
    wakeLogs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWakeLogs) => {
        res.json(updatedWakeLogs);
    });
});

//Create
router.post('/wake', (req, res) => {
    wakeLogs.create(req.body, (err, createdWakeLogs) => {
        res.json(createdWakeLogs);
    });
});

//Show
router.get('/wake/:id', (req, res) => {
    wakeLogs.findByID(req.params.id, (err, foundWakeLogs) => {
        res.json(foundWakeLogs);
    });
});


module.exports = router;