const express = require('express');
const router = express.Router();

const infoData = require('../models/infoData');

router.post('/', async (req, res) => {
    if(req.body.infoText.length < 1){
        return res.json({
            "output": "Failure! info must be atleast 1 character long"
        })
    }
    else{
        let newinfoData = new infoData({
            infoText: `${req.body.infoText}`
        })

        newinfoData.save()
        .then( () => {
            return res.json({
                "output": "Info submitted successfully!"
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
})

module.exports = router;