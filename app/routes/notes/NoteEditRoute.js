/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var NoteForm = require('../../components/notes/NoteForm');
var NoteStore = require('../../stores/NoteStore');
var NoteActions = require('../../actions/NoteActions');

var NoteEditRoute = module.exports = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    willTransitionTo(transition, params) {
      return transition.wait(NoteStore.fetchById(params.noteID));
    }
  },

  getInitialState() {
    return {
      note: NoteStore.getById(this.props.params.noteID),
      error: null
    };
  },

  handleSubmit(note) {
    NoteActions.editNote(note)
      .then(note => {
        this.transitionTo('note', { noteID: note.id });
      })
      .catch(error => {
        self.setState({ error: error.data });
      });
  },

  render() {
    var error;

    if (this.state.error) {
      error = (
        <p><b>{"Error:"}</b> {this.state.error}</p>
      );
    }

    return (
      <div className="route">
        <h1>Edit Note</h1>
        <NoteForm
          note={this.state.note}
          onSubmit={this.handleSubmit}
        />
        {error}
      </div>
    );
  }
});
