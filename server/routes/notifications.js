const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../../db/index.js');

router.get('/', (req, res, next) => {
  res.json('Notifications endpoint')
});

router.post('/', (req, res, next) => {
  const username = req.body.username;
  const searchQuery = req.body.searchQuery;
  let doesNotificationExist = false;
  db.User.findOne({ username })
    .then((user) => {
      user.notifications.forEach((notification) => {
        if (notification.searchQuery === searchQuery) {
          doesNotificationExist = true;
          notification.thresholdLow = req.body.low;
          notification.thresholdHigh = req.body.high;
        }
      });
      if (!doesNotificationExist) {
        user.notifications.push({
          searchQuery,
          thresholdLow: req.body.low,
          thresholdHigh: req.body.high
        });
      }
      user.markModified('notifications');
      user.save((err) => {
        if (err) {
          console.log(err);
        }
      });
      res.send('Notifications updated');
    })
    .catch((err) => console.log(err));
});

module.exports.notifications = router;

