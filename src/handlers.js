const fs = require('fs');

function publicHandler(req, res) {
  var url = req.url;
  if (url == '/') {
    url = '/public/index.html';
  }
  var parts = url.split('.');
  var fileExtention = parts[parts.length - 1];

  var contentTypes = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  fs.readFile(__dirname + '/..' + url, (err, data) => {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, {
        'Content-Type': contentTypes[fileExtention]
      });
      res.end(data);
    }
  });
}

function noPageHandler(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end('<center><h1>404 Page Not found</h1></center>');
}
module.exports = {
  publicHandler,
  noPageHandler
}
