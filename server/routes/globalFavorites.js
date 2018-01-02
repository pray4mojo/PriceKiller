const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js');

router.get('/', (req, res, next) => {
  db.CronJob.find({})
    .then((result) => {
      let favorites = result.map((listing) => {
        let favorite = {};
        favorite.categoryId = listing.categoryId;
        favorite.searchQuery = listing.searchQuery;
        return favorite;
      });
      return favorites;
    }).then((success) => {
      res.send(success);
    })
});

router.post('/', (req, res, next) => {

});

module.exports.globalFavorites = router;

