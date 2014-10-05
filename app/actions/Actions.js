var Dispatcher = require('../Dispatcher');
var ActionTypes = require('../ActionTypes');
var API = require('../utils/API');

module.exports = {

  create: function(text) {
    var itemID = 'ID_' + Date.now();
    Dispatcher.dispatch({
      type: ActionTypes.Foo.CREATE_STARTED,
      itemID: itemID
    });
    return API.create(text)
      .then(function(data) {
        Dispatcher.dispatch({
          type: ActionTypes.Foo.CREATE_COMPLETED,
          itemID: itemID,
          text: data.text
        });
      });
  }

};
