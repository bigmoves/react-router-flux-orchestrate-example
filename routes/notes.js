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
  db.get('notes', req.params.id)
    .then(function(result) {
      result.body.id = req.params.id;
      res.status(result.statusCode).json(result.body);
    })
    .fail(function(err) {
      res.status(err.statusCode).json(err.body.message);
    });
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

router.put('/:id', function(req, res) {
  delete req.body.id;
  db.put('notes', req.params.id, req.body)
    .then(function(result) {
      req.body.id = req.params.id;
      res.status(result.statusCode).json(req.body);
    })
    .fail(function(err) {
      res.status(err.statusCode).json(err.body.message);
    });
});

router.delete('/:id', function(req, res) {
  db.remove('notes', req.params.id, true)
    .then(function(result) {
      res.status(result.statusCode).end();
    })
    .fail(function(err) {
      res.status(err.statusCode).json(err.body.message);
    });
});

module.exports = router;
