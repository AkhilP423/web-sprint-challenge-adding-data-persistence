// build your server here and require it from index.js
//server up, express already installed
const express = require('express')
const server = express()

//routers routed here
const ProjectRouter = require('./project/router')
const TaskRouter = require('./task/router')
const ResourceRouter = require('./resource/router')

server.use(express.json())

//api files routed here.

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

//error messsgae on fail
server.use((err, req, res, next) => {
    res.status(500).json({message: err.message, stack: err.stack})
})

module.exports = server 