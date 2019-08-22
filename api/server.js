const express = require('express');

const Dogs = require('../dogs/dogsModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/dogs', (req, res) => {
  Dogs.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/dogs', (req, res) => {
  Dogs.insert(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
