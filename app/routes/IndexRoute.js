/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var IndexRoute = module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>Index</h1>
        <h1><Link to="notes">Notes</Link></h1>
      </div>
    );
  }
});

