var ActionTypes = require('../ActionTypes');
var BaseStore = require('./BaseStore');

class Store extends BaseStore {
  constructor() {
    super();

    this._notes = {};
    this._isLoading = false;
  }

  getById(id) {
    return this._notes[id];
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
        this._notes[action.noteID] = action.text;
        this._isLoading = false;
        //this.emitChange();
        break;
    }
  }

}

var store = new Store();
window.store = store;
module.exports = store;
