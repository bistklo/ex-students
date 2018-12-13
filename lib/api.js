const express = require('express');
const data = require('./data');

const api = new express.Router();

api.use(express.json());

api.get('/', (req, res) => {
  res.json(data);
});
module.exports = api;
