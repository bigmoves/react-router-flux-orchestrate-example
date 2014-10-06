var keyMirror = require('react/lib/keyMirror');

module.exports = {

  Notes: keyMirror({
    CREATE_STARTED: null,
    CREATE_COMPLETED: null,

    EDIT_STARTED: null,
    EDIT_COMPLETED: null,

    DELETE_STARTED: null,
    DELETE_COMPLETED: null
  })

};
