var ActionTypes = require('../ActionTypes');
var BaseStore = require('./BaseStore');
var NotesAPI = require('../utils/NotesAPI');

class NoteStore extends BaseStore {
  constructor() {
    super();

    this._notes = {};
    this._isLoading = false;
  }

  _addNotes(notes) {
    notes.forEach(note => {
      if (!this._notes[note.id]) {
        this._notes[note.id] = note;
      }
    });
  }

  getById(id) {
    return this._notes[id];
  }

  listAll() {
    return NotesAPI.list()
      .then(notes => {
        this._addNotes(notes);
      });
  }

  getAll() {
    return this._notes;
  }

  handleDispatch(action) {
    console.log(action);
    switch(action.type) {
      case ActionTypes.Notes.CREATE_STARTED:
        this._isLoading = true;
        this.emitChange();
        break;

      case ActionTypes.Notes.CREATE_COMPLETED:
        this._notes[action.noteID] = action.note;
        this._isLoading = false;
        break;
    }
  }

}

var noteStore = new NoteStore();
window.NoteStore = noteStore;
module.exports = noteStore;
