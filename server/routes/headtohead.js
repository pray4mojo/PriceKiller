const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json('HeadToHead endpoint')
});

router.post('/', (req, res, next) => {

});

module.exports.headToHead = router;

