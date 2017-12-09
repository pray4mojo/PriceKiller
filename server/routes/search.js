const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json('Search Route')
});

router.post('/', (req, res, next) => {

});

module.exports.search = router;