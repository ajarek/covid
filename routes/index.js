const router = require('express').Router()
const Newdate = require('../models/Newdate')
router.get('/index', async (req, res) => {
    res.render('index')
})
router.post('/index', async (req, res) => {
    const newdate = new Newdate({
        day: req.body.day,
        infected: req.body.infected,
        died: req.body.died,
    })
    try {
        await newdate.save()
        console.log(newdate)
        res.redirect('/index')
    } catch (err) {
        res.redirect('/')
    }
})
module.exports = router