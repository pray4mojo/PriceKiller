const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:searchQuery/:categoryId', (req, res, next) => {
  const keywords = req.params.searchQuery.split(' ').join('%20');
  console.log(req.params.categoryId)
  axios({
    method: 'get',
    url: `http://svcs.ebay.com/services/search/FindingService/v1?service-version=1.13.0&security-appname=${process.env.EBAYAPIKEY}&OPERATION-NAME=findCompletedItems&keywords=${keywords}&ItemSort=BestMatch&response-data-format=JSON&categoryId=${req.params.categoryId}`
  })
  .then((response) => {
    //const error = response.data.findCompletedItemsResponse[0].errorMessage[0].error[0];
    const results = response.data.findCompletedItemsResponse[0].searchResult[0];
    //console.log(results);
    res.send(results);
  })
  .catch((err) => console.log('error: ', err));
});

router.post('/', (req, res, next) => {

});

module.exports.refinedSearch = router;
