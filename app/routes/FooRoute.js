/** @jsx React.DOM */

var React = require('react');

var FooRoute = module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>Foo</h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

