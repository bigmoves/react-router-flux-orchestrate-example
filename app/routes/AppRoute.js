/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AppRoute = module.exports = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <div className="route">
          <h1><Link to="/">Application</Link></h1>
          {this.props.activeRouteHandler()}
        </div>
      </div>
    );
  }
});
