const express = require('express');
const router = express.Router();

const gossipData = require('../models/gossipData');

router.get('/', async (req, res) => {
    let cnt = Number(req.query.cnt);
    let gsp = await gossipData.find().sort({createdAt: -1}).limit(cnt);
    res.send(gsp);
})

module.exports = router;