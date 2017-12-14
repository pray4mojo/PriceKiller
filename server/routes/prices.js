const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js');

router.get(`/:searchQuery`, (req, res, next) => {
  const searchQuery = req.params.searchQuery;
  db.CronJob.findOne({ searchQuery })
    .then((cronJob) => {
      res.send(cronJob);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res, next) => {

});

module.exports.prices = router;