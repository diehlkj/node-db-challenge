const express = require('express');

const Projects = require('./projectsDb.js');

const router = express.Router();

// /api/projects
    // get
    // post
// /api/projects/:id
    // get
    // put      -- optional
    // delete   -- optional
// /api/projects/:id/tasks
    // get
    // post
    // put      -- optional
    // delete   -- optional
// /api/projects/:id/resources
    // get
    // post
    // put      -- optional
    // delete   -- optional

router.get('/', (req, res) => {
    Projects.findProjects()
        .then(resData => {
            res.status(200).json({ message: 'Your [get] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })
}) // Tested & Working

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findProjectsById(id)
        .then(resData => {
            res.status(200).json({ message: 'Your [get] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })
}) // Tested & Working

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.findResources(id)
        .then(resData => {
            res.status(200).json({ message: 'Your [post] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })

    
}) // Tested & Working

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
        .then(resData => {
            res.status(200).json({ message: 'Your [get] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })
}) // Tested & Working

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.insertProjects(projectData)
        .then(resData => {
            res.status(201).json({ message: 'Your [get] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })
})

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskData = req.body;

    Projects.insertTasks(id, taskData)
        .then(resData => {
            res.status(201).json({ message: 'Your [post] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })

})

router.post('/:id/resources', (req, res) => {
    const { id } = req.params;
    const resourceData = req.body;

    Projects.insertResources(id, resourceData)
        .then(resData => {
            res.status(201).json({ message: 'Your [post] request was successful.', resData })
        })
        .catch(err => {
            res.status(500).json({ message: 'There was a problem with ', err });
        })
})

module.exports = router;