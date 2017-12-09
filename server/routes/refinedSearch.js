const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.json('refinedSearch')
});

router.post('/', (req, res, next) => {

});

module.exports.refinedSearch = router;

// axios({
//     method: 'get',
//       url: 'http://svcs.ebay.com/services/search/FindingService/v1',
//       'service-version': '1.13.0',
//       'security-appname': process.env.EBAYAPIKEY,
//       'OPERATION-NAME': 'findItemsByKeywords',
//       keywords: req.params.searchQuery,
//       itemSort: 'BestMatch',
//       'response-data-format': 'JSON'
//   })