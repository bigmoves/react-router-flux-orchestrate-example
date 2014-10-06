/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NoteStore = require('../../stores/NoteStore');

var NoteRoute = module.exports = React.createClass({
  statics: {
    willTransitionTo(transition, params) {
      return transition.wait(NoteStore.fetchById(params.noteID));
    }
  },

  getInitialState() {
    return {
      note: NoteStore.getById(this.props.params.noteID),
    };
  },

  render() {
    var note = this.state.note;
    return (
      <div>
        <h1>Note</h1>
        <p>{note.text}</p>
      </div>
    );
  }
});

