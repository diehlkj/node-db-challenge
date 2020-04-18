const express = require('express');
const Tasks = require('./tasksDb.js');
const router = express.Router();

// /api/tasks
    // get
    // post
// /api/tasks/:id
    // put      -- optional
    // delete   -- optional

router.get('/', (req, res) => {
    Tasks.find()
        .then(taskData => {
            res.status(200).json({ MESSAGE: 'Your [] request was successful...', taskData })
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: 'There was a problem with ', err});
        })
})

// This isnt working and I dont have time to figure out why....

// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     Tasks.findById(id)
//         .then(taskData => {
//             res.status(200).json({ MESSAGE: 'Your [] request was successful...', taskData })
//         })
//         .catch(err => {
//             res.status(500).json({ MESSAGE: 'There was a problem with ', err});
//         })
// })

module.exports = router;