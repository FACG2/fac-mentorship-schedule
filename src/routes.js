var handler = require("./handlers.js");

function router(req, res) {
  var url = req.url;
  if (url === '/' || url.startsWith('/public')) {
    handler.publicHandler(req, res);
  } else if (url === '/create-cohort') {
    handler.createCohortHandler(req,res);
  } else if (url === '/add-mentor') {

  } else if (url === '/cohorts') {

  } else if (url.startsWith('/weeks') ) {
    handler.viewWeeksHandler(req,res);
  } else {
    handler.noPageHandler(req, res);
  }

}
module.exports = router;
