/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var NoteForm = require('../../components/notes/NoteForm');
var NoteStore = require('../../stores/NoteStore');
var NoteActions = require('../../actions/NoteActions');

var FooNewRoute = module.exports = React.createClass({
  mixins: [ Router.Transitions ],

  getInitialState() {
    return {
      error: null
    };
  },

  handleSubmit(formData) {
    NoteActions.createNote(formData.text)
      .then(note => {
        this.transitionTo('note', { noteID: note.id });
      })
      .catch(error => {
        self.setState({ error: error.data.msg });
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
      <div>
        <h1>New Note</h1>
        <NoteForm onSubmit={this.handleSubmit} />
        {error}
      </div>
    );
  }
});

