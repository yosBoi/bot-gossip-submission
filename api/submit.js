const express = require('express');
const router = express.Router();

const gossipData = require('../models/gossipData');

router.post('/', async (req, res) => {
    if(req.body.gossipText.length < 1){
        return res.json({
            "output": "Failure! Gossip must be atleast 1 character long"
        })
    }
    else{
        let newGossipData = new gossipData({
            gossipText: `${req.body.gossipText}`
        })

        newGossipData.save()
        .then( () => {
            return res.json({
                "output": "Gossip submitted successfully!"
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
})

module.exports = router;