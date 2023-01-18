const express = require('express');
const router = express.Router();
const breakFast = require('../models/breakfast');

//Index
router.get('/breakfast', (req, res) => {
    breakFast.find({}, (err, foundBreakfast) => {
        res.json(foundBreakfast);
    });
});

//Delete
router.delete('/breakfast/:id', (req, res)=>{
    breakFast.findByIdAndRemove(req.params.id, (err, deletedBreakfastErr) =>{
        res.json(deletedBreakfastErr);
    });
});

//Update  
router.put('/breakfast/:id', (req, res)=>{
    breakFast.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBreakfast)=>{
        res.json(updatedBreakfast);
    });
});

//Create
router.post('/breakfast', (req, res) => {
    breakFast.create(req.body, (err, createdBreakfast) => {
        res.json(createdBreakfast);
    });
});

//Show
router.get('/breakfast/:id', (req, res) => {
    breakFast.findById(req.params.id, (err, foundBreakfast) => {
        res.json(foundBreakfast);
    });
});

module.exports = router;