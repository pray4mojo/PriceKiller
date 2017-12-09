const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:searchQuery', (req, res, next) => {
  axios({
    method: 'get',
      url: 'http://svcs.ebay.com/services/search/FindingService/v1',
      'version': '1.13.0',
      'security-appname': process.env.EBAYAPIKEY,
      'OPERATION-NAME': 'findItemsByKeywords',
      keywords: req.params.searchQuery,
      itemSort: 'BestMatch',
      'response-data-format': 'JSON'
  })
  .then((response) => {
    console.log(response);
    res.json(response.data);
  })
  .catch((err) => console.log('error: ', err));
});

router.post('/', (req, res, next) => {

});

module.exports.search = router;