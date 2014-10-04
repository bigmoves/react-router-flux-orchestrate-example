/** @jsx React.DOM */

var React = require('react');

var App = module.exports = React.createClass({
  render: function() {
    return (
      <div className="application">
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});
