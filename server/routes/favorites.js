const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json('favorites Route')
});

router.post('/', (req, res, next) => {

});

module.exports.favorites = router;