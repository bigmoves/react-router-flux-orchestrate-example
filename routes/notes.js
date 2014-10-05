var express = require('express');
var router = express.Router();
var db = require('orchestrate')(process.env.ORC_API_KEY);

router.get('/', function(req, res) {
  db.list('notes')
    .then(function(result) {
      res.status(result.statusCode).json(result.body.results);
    })
    .fail(function(err) {
      res.status(err.statusCode).json(err.body.message);
    });
});

router.get('/:id', function(req, res) {

});

router.post('/', function(req, res) {
  db.post('notes', req.body)
    .then(function(result) {
      req.body.id = result.headers.location.split('/')[3];
      res.status(result.statusCode).json(req.body);
    })
    .fail(function(err) {
      res.status(err.statusCode).json(err.body.message);
    });
});

router.delete('/:id', function(req, res) {

});

module.exports = router;
