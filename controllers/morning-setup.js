const express = require('express');
const router = express.Router();
const morningSetup = require('../models/morning-setup');


//Index
router.get('/log', (req, res) =>{
    morningSetup.find({}, (err, foundLog) =>{
        res.json(foundLog);
    });
});

//Delete
router.delete('/log/:id', (req, res) => {
    morningSetup.findByIdAndRemove(req.params.id, (err, deletedLog) =>{
        res.json(deletedLog);
    });
});

//Updated
router.put('/log/:id', (req,res) => {
    morningSetup.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedLog) => {
        res.json(updatedLog);
    });
});

//Create
router.post('/log', (req, res) => {
    morningSetup.create(req.body, (err, createdLog) => {
        res.json(createdLog);
    });
});

//Show
router.get('/log/:id', (req,res) => {
    morningSetup.findById(req.params.id, (err, foundLog) => {
        res.json(foundLog);
    });
});


module.exports = router;
