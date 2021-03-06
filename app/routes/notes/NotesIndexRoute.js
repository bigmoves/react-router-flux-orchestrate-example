/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NoteStore = require('../../stores/NoteStore');
var StoreMixin = require('../../mixins/StoreMixin');

var NotesIndexRoute = module.exports = React.createClass({
  mixins: [ StoreMixin(NoteStore) ],

  getStateFromStores() {
    return {
      notes: NoteStore.getAll()
    };
  },

  render() {
    var notes = Object.keys(this.state.notes).map(noteID => {
      return (
        <li key={noteID}>
          <Link to="note" params={{ noteID: noteID }}>
            {this.state.notes[noteID].text}
          </Link>
        </li>
      );
    }, this);

    return (
      <div className="route">
        <h1>Notes Index</h1>
        <Link to="add-note">Add Note</Link>
        <ul>
          {notes}
        </ul>
      </div>
    );
  }
});

