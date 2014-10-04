/** @jsx React.DOM */

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, there.</h1>
      </div>
    );
  }
});

React.renderComponent(<App/>, document.body);
