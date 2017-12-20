const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js');

router.get(`/:searchQuery`, (req, res, next) => {
  const searchQuery = req.params.searchQuery;
  db.CronJob.findOne({ searchQuery })
    .then((cronJob) => {
      // Auction data is not currently being used on the front end
      // db.ProductAuctions.findOne({ searchQuery })
      //   .then((auctions) => {
      //     res.send({ priceHistory: cronJob, auctions: auctions})
      //   })
      res.send({ priceHistory: cronJob });
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res, next) => {

});

module.exports.prices = router;