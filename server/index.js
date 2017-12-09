
const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// file requires below
const login = require('./routes/login.js').login;
const search = require('./routes/search.js').search;
const refinedSearch = require('./routes/refinedSearch').refinedSearch;
const favorites = require('./routes/favorites').favorites;
const prices = require('./routes/prices').prices;
const profile = require('./routes/profile').profile;
const headToHead = require('./routes/headtohead').headToHead;

require('dotenv').config();

const app = express();

app.set('port', (process.env.PORT || 1111));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const port = app.get('port');

app.use(express.static(__dirname + '/../public/dist'));
app.get('/api/search/:query', (req, res) => {
  res.send(query);
})
//Below is the convention for integrating the different endpoint files
app.use('/api/login', login);
app.use('/api/search', search);
app.use('/api/refinedSearch', refinedSearch);
app.use('/api/favorites', favorites);
app.use('/api/prices', prices);
app.use('/api/profile', profile);
app.use('/api/headToHead', headToHead);

app.get('/', (req, res) => {
  res.json('HELLO OUTSIDE SERVER')
});

app.listen(port, () => {
  console.log(`Listening on ${port}`)
});