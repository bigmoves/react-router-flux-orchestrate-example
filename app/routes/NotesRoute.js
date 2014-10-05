/** @jsx React.DOM */

var React = require('react');
var NoteStore = require('../stores/NoteStore');

var NotesRoute = module.exports = React.createClass({
  statics: {
    willTransitionTo(transition, params) {
      return transition.wait(NoteStore.listAll());
    }
  },

  render() {
    return (
      <div>
        <h1>Notes</h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

