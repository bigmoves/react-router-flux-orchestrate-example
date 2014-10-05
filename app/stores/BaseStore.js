var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
  constructor() {

    // Autobind methods
    // https://github.com/ianobermiller/nuclearmail/blob/master/src/js/BaseStore.js
    for (var prop in this) {
      if (typeof this[prop] === 'function' && /^[A-Za-z]/.test(prop)) {
        this[prop] = this[prop].bind(this);
        this[prop].store = this;
      }
    }

    this.DispatchToken = Dispatcher.register(this.handleDispatch);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

window.BaseStore = BaseStore;
module.exports = BaseStore;
