/** @jsx React.DOM */

var React = require('react');

var AppRoute = module.exports = React.createClass({
  render: function() {
    return (
      <div className="application">
        <h1>Application</h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});
