const router = require('express').Router()
const Newdate = require('../models/Newdate')
const mysort = {day:-1}
router.get('/', async (req, res) => {
    try {
        let displayData
        displayData = await Newdate.find({}).sort(mysort)
        res.render('home', {
            mydisplayData: displayData
        })
    } catch (err) {
        res.status(500).send(err)
    }
})
module.exports = router