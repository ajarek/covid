const router = require('express').Router()
const Newdate = require('../models/Newdate')
    router.get('/chart',async(req,res)=>{        
        try {
            let displayData
            displayData = await Newdate.find({})
            res.render('chart', {
                mydisplayData: displayData
            })
        } catch (err) {
            res.status(500).send(err)
        }
    })
    module.exports=router