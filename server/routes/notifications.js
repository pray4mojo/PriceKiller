const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json('Notifications endpoint')
});

router.post('/', (req, res, next) => {

});

module.exports.notifications = router;

