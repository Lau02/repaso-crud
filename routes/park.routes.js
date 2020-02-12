const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')

// Aquí los endpoints

// router.get('/', (req, res, text) => {
// res.render('/index')
// })

router.get('/', (req, res, next) => {
    Park.find()
        .then(allParks => {
            res.render('/parks/index-park.hbs', {
                allParks
            })
        })
        .catch(err => next(err))
    console.log('error')
})


router.get('/new', (req, res, next) => {
    res.render('parks/new-park.hbs');
});


router.post('/new', (req, res, next) => {
    Park.create(req.body).then(() => {
        console.log('que pasa')
        res.redirect('/')
    })
})




module.exports = router