const express = require('express');
const router = express.Router();
const MorningLog = require('../models/morning-setup');


//Index
router.get('/', (req, res) =>{
    MorningLog.find({}, (err, foundLog) =>{
        res.json(foundLog);
    });
});

//Delete
router.delete('/:id', (req, res) => {
    MorningLog.findByIdAndRemove(req.params.id, (err, deletedLog) =>{
        res.json(deletedLog);
    });
});

//Updated
router.put('/:id', (req,res) => {
    MorningLog.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog) => {
        res.json(updatedLog);
    });
});

//Create
router.post('/', (req, res) => {
    MorningLog.create(req.body, (err, createdLog) => {
        res.json(createdLog);
    });
});

//Show
router.get('/log/:id', (req,res) => {
    MorningLog.findById(req.params.id, (err, foundLog) => {
        res.json(foundLog);
    });
});


module.exports = router;
