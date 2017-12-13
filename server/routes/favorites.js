const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js')

router.get('/', (req, res, next) => {
  res.json('favorites Route')
});

router.post('/:username', (req, res, next) => {
  const username = req.params.username
  const newFavorites = req.body;
  newFavorites.forEach((favorite) => {
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
    db.User.findOne({ username })
      .then((user) => {
        user.favorites = user.favorites.concat(newFavorites);
        user.markModified('favorites');
        user.save((err) => {
          if (err) {
            console.log(err);
          }
        });
        res.send(user.favorites);
      })
      .catch((err) => console.log(err));
  });
  // {
  //   queryString: 'playstation',
  //   categoryId: 23413245324
  // }
});

router.delete('/:username', (req, res, next) => {
  const username = req.params.username;
  const favoriteToDelete = req.body;
  db.User.findOne({ username })
    .then((user) => {
      user.favorites = user.favorites.filter((favorite) => {
        return !((favorite.searchQuery === favoriteToDelete.searchQuery && favorite.categoryId === favoriteToDelete.categoryId))
      });
      user.markModified('favorites');
      user.save((err) => {
        if (err) {
          console.log(err);
        }
      });
      res.send(user.favorites);
    })
    .catch((err) => console.log(err));
});

module.exports.favorites = router;