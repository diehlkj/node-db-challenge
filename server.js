// import the bois
const express = require('express');
const helmet = require('helmet');

// import the routes
// const projectsRouter = require('./projects/projectsRouter.js');
// const resourcesRouter = require('./resources/resourcesRouter.js');
// const tasksRouter = require('./tasks/tasksRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);
// server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);
// server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Node DB Sprint Challenge!</h2>`);
});

function logger(req, res, next) {
    const d = new Date();
    console.log(
      `${req.method} Request Made At URL(${
        req.url
      }) On ${d.getMonth()}/${d.getDay()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`
    );
    next();
}

module.exports = server;