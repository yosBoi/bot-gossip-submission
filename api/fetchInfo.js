const express = require('express');
const router = express.Router();

const infoData = require('../models/infoData');

router.get('/', async (req, res) => {
    let cnt = Number(req.query.cnt);
    let gsp = await infoData.find().sort({createdAt: -1}).limit(cnt);
    res.send(gsp);
})

module.exports = router;