/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NoteStore = require('../../stores/NoteStore');
var NoteActions = require('../../actions/NoteActions');

var NoteRoute = module.exports = React.createClass({
  mixins: [ Router.Navigation ],

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

  handleDelete(e) {
    e.preventDefault();
    NoteActions.deleteNote(this.state.note.id)
      .then(() => {
        this.transitionTo('notes');
      });
  },

  render() {
    var note = this.state.note;
    return (
      <div className="route">
        <h1>Note</h1>
        <Link to="edit-note" params={{ noteID: note.id }}>Edit note</Link>
        <a href="" onClick={this.handleDelete}>Delete note</a>
        <p>{note.text}</p>
      </div>
    );
  }
});

