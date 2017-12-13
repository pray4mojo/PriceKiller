const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js')

router.get('/', (req, res, next) => {
  res.json('favorites Route')
});

router.post('/', (req, res, next) => {
  const favorites = req.body;
  console.log('favorites: ', favorites);
  favorites.forEach((favorite) => {
    db.CronJob.findOne(favorite)
      .then((result) => {
        if (!result) {
          db.CronJob.create(favorite, (err) => {
            if (err) {
              console.log(err);
            }
          });
          db.ProductAuctions.create(favorite, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      })
      .catch((err) => console.log(err));
    // db.UserSchema.findOneAndUpdate(/*This User */, { favorites })
    //   .catch((err) => console.log(err))
  })
  // {
  //   queryString: 'playstation',
  //   categoryId: 23413245324
  // }
});

module.exports.favorites = router;