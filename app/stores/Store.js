var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _items = {};

var Store = merge(EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _items[id];
  },

  getAll: function() {
    return _items;
  }

});

Store.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.Foo.CREATE_COMPLETED:
      _items[action.itemID] = action.text;
      Store.emitChange();
      break;

    default:
      // do nothing
  }

});

window.Store = Store;
module.exports = Store;
