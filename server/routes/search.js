const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:searchQuery', (req, res, next) => {
  axios({
    method: 'get',
      url: 'http://svcs.ebay.com/services/search/FindingService/v1',
      'service-version': '1.13.0',
      'security-appname': 'BrianBin-priceKil-PRD-45d705b3d-2bb22d04',
      'OPERATION-NAME': 'findCompletedItems',
      keywords: searchQuery,
      itemSort: 'BestMatch',
      'response-data-format': 'JSON'
  })
  .then(response => res.json(response.data));
});

router.post('/', (req, res, next) => {

});

module.exports.search = router;