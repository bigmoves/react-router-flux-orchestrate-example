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

  fetchById(noteID) {
    if (!this._notes[noteID]) {
      return NotesAPI.fetchById(noteID)
        .then(note => {
          this._notes[note.id] = note;
        });
    }
    return;
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

      case ActionTypes.Notes.EDIT_COMPLETED:
        this._notes[action.noteID] = action.note;
        this._isLoading = false;
        break;

      case ActionTypes.Notes.DELETE_COMPLETED:
        delete this._notes[action.noteID];
        this._isLoading = false;
        break;
    }
  }

}

var noteStore = new NoteStore();
window.NoteStore = noteStore;
module.exports = noteStore;
