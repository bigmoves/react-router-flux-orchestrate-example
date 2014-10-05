var ActionTypes = require('../ActionTypes');
var BaseStore = require('./BaseStore');

class Store extends BaseStore {
  constructor() {
    super();

    this._items = {};
    this._isLoading = false;
  }

  getById(id) {
    return this._items[id];
  }

  getAll() {
    return this._items;
  }

  handleDispatch(action) {
    console.log(action);
    switch(action.type) {
      case ActionTypes.Foo.CREATE_STARTED:
        this._isLoading = true;
        this.emitChange();
        break;

      case ActionTypes.Foo.CREATE_COMPLETED:
        this._items[action.itemID] = action.text;
        this._isLoading = false;
        //this.emitChange();
        break;
    }
  }

}

var store = new Store();
window.store = store;
module.exports = store;
