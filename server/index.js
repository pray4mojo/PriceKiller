const express = require('express');
const db = require('../db/index.js');
require('dotenv').config();

const app = express();

app.set('port', (process.env.PORT || 1111));
const port = app.get('port');

app.use(express.static(__dirname + '/../public/dist'))

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});