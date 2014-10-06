var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var NotesAPI = require('../utils/NotesAPI');

module.exports = {

  createNote(note) {
    return NotesAPI.createNote(note)
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.Notes.CREATE_COMPLETED,
          noteID: data.id,
          note: data
        });
        return data;
      });
  },

  editNote(note) {
    return NotesAPI.editNote(note)
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.Notes.EDIT_COMPLETED,
          noteID: data.id,
          note: data
        });
        return data;
      });
  },

  deleteNote(noteID) {
    return NotesAPI.deleteNote(noteID)
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.Notes.DELETE_COMPLETED,
          noteID: noteID
        });
      });
  }

};
