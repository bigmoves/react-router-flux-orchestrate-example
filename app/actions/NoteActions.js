var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var NotesAPI = require('../utils/NotesAPI');

module.exports = {

  createNote(text) {
    var noteID = 'ID_' + Date.now();
    Dispatcher.dispatch({
      type: ActionTypes.Notes.CREATE_STARTED,
      noteID: noteID
    });
    return NotesAPI.createNote(text)
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.Notes.CREATE_COMPLETED,
          noteID: noteID,
          text: data.text
        });
      });
  }

};
