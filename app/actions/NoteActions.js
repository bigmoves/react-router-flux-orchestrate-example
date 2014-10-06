var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var NotesAPI = require('../utils/NotesAPI');

module.exports = {

  createNote(text) {
    return NotesAPI.createNote(text)
      .then(data => {
        Dispatcher.dispatch({
          type: ActionTypes.Notes.CREATE_COMPLETED,
          noteID: data.id,
          note: data
        });
        return data;
      });
  }

};
