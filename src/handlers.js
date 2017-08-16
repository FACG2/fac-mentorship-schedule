const querystring = require('querystring');
const fs = require('fs');
const dbFunctions = require('./queries/db_functions.js')

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

function createCohortHandler(req, res) {
  var allData = '';
  req.on('data', function(chunk) {
    allData += chunk;
  });
  req.on('end', function() {

    var obj = querystring.parse(allData);
    console.log(obj);
    var result = dbFunctions.addCohort(obj, (err, ress) => {

      if (err) {
        console.log(err);
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
        res.end('server error');
      } else {
        res.writeHead(302, {
          'Location': '/'
        });

        res.end();
      }
    });

  });
  req.on('error', function() {
    res.end('connot create cohort');
  })

}

function viewWeeksHandler(req, res) {
  var url = req.url;
  var resu = url.split("?");
  var obj = querystring.parse(resu[1]);
  var result = dbFunctions.weeksMentors(obj.cohort, (err, ress) => {

    if (err) {
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.end('server error');
    } else {

      res.end(JSON.stringify(ress));
    }
  });

}

function viewCohortsHandler(req, res) {
  var result = dbFunctions.getCohortNames((err, ress) => {
    if (err) {
      console.log(err);
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.end('server error');
    } else {

      res.end(JSON.stringify(ress));
    }
  });
}

function createNewMentor(req, res) {
  var allData = '';
  req.on('data', function(chunk) {
    allData += chunk;
  });

  req.on('end', function() {
    var obj = querystring.parse(allData);
    console.log(obj);
    var result = dbFunctions.addMenetor(obj, (err, response) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html'
        });
      } else {
        res.writeHead(302, {
          'Location': '/'
        });
        res.end()
      }
    });
  });
  req.on('error', () => {
    res.end("Can't create a new mentoer");
  })
}

function noPageHandler(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end('<center><h1>404 Page Not found</h1></center>');
}
module.exports = {
  publicHandler,
  noPageHandler,
  createCohortHandler,
  viewWeeksHandler,
  viewCohortsHandler,
  createNewMentor
}
