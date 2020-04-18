const express = require('express');
const Resources = require('./resourcesDb.js');
const router = express.Router();

// /api/resources
    // get
    // post
// /api/resources/:id
    // put      -- optional
    // delete   -- optional

router.get('/', (req, res) => {
    Resources.find()
        .then(resData => {
            res.status(200).json({ MESSAGE: 'Your [] request was successful...', resData })
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was a problem with ', err});
        })
})
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.findById(id)
        .then(resData => {
            res.status(200).json({ MESSAGE: 'Your [] request was successful...', resData })
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was a problem with ', err});
        })
})
router.get('/', (req, res) => {
    const resourceData = req.body;

    Resources.insert(resourceData)
        .then(resData => {
            res.status(200).json({ MESSAGE: 'Your [] request was successful...', resData })
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was a problem with ', err});
        })
})

module.exports = router;