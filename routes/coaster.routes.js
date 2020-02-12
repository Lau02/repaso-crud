const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model.js')
// Aquí los endpoints

router.get('/', (req, res, next) => {
    res.render('coasters/new-coaster.hbs');
});

router.post('/', (req, res, next) => {
    Coaster.create({
            name: req.body.name,
            description: req.body.description
        })
        .then(() => {
            res.redirect('/')
        })
})


module.exports = router