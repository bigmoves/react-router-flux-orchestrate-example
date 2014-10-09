/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NoteStore = require('../stores/NoteStore');

var NotesRoute = module.exports = React.createClass({
  statics: {
    willTransitionTo(transition, params) {
      return transition.wait(NoteStore.listAll());
    }
  },

  render() {
    return (
      <div className="route">
        <h1><Link to="notes">Notes</Link></h1>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

