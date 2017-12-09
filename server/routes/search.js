const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:searchQuery', (req, res, next) => {
  const keywords = req.params.searchQuery.split(' ').join('%20');
  axios({
    method: 'get',
    url: `http://svcs.ebay.com/services/search/FindingService/v1?version=1.13.0&SECURITY-APPNAME=${process.env.EBAYAPIKEY}&OPERATION-NAME=findItemsByKeywords&keywords=${keywords}&ItemSort=BestMatch&response-data-format=JSON`
    // 'version': '1.13.0',
    // 'SECURITY-APPNAME': process.env.EBAYAPIKEY,
    // 'OPERATION-NAME': 'findItemsByKeywords',
    // 'keywords': req.params.searchQuery,
    // 'itemSort': 'BestMatch',
    // 'RESPONSE-DATA-FORMAT': 'JSON'
  })
  .then((response) => {
    console.log(response.data.findItemsByKeywordsResponse[0].searchResult);
    res.send(response.data.findItemsByKeywordsResponse[0].searchResult);
  })
  .catch((err) => console.log('error: ', err));
});

router.post('/', (req, res, next) => {

});

module.exports.search = router;