const express = require('express');
const morgan = require('morgan');
const server = express();
const actionRouter = require('./data/helpers/actionRouter')
const projectRouter = require('./data/helpers/projectRouter')

server.use(express.json());

server.get('/', (req,res) => {
    res.send(`<h2>Let's do this</h2>`)
});

//custom middleware
server.use(morgan('dev'))
server.use('/api/action', actionRouter)
server.use('/api/project', projectRouter)

server.get('*', (req,res) => {
    res.status(404).json ({ message: 'not found' })
}) 

module.exports = server;