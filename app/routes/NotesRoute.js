/** @jsx React.DOM */

var React = require('react');

var NotesRoute = module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>Notes</h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

