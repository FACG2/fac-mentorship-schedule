var handler = require("./handler.js");

function router(req, res) {
  var url = req.url;
  if (url === '/' || url.startsWith('/public')) {
    handler.publicHandler(req, res);
  } else if (url === '/create-cohort') {

  } else if (url === '/add-mentor') {

  } else if (url === '/cohorts') {

  } else if (url === '/weeks') {

  } else {
    handler.noPageHandler(req, res);
  }

}
module.exports = router;
