const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:searchQuery/:maxPage', (req, res, next) => {
  const keywords = req.params.searchQuery.split(' ').join('%20');
  const nextPage = Math.floor(req.params.maxPage / 1) + 1;
  axios({
    method: 'get',
    url: `http://svcs.ebay.com/services/search/FindingService/v1?version=1.13.0&SECURITY-APPNAME=${process.env.EBAYAPIKEY}&OPERATION-NAME=findItemsByKeywords&keywords=${keywords}&ItemSort=BestMatch&paginationInput.pageNumber=${nextPage}&paginationInput.entriesPerPage=100&response-data-format=JSON`
  })
  .then((response) => {
    res.send(response.data.findItemsByKeywordsResponse[0].searchResult);
  })
  .catch((err) => console.log('error: ', err));
});

router.post('/', (req, res, next) => {

});

module.exports.nextPage = router;