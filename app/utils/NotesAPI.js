var axios = require('axios');

module.exports = {

  list() {
    return axios.get('/api/notes')
      .then(response => {
        return response.data.map(note => {
          var json = note.value;
          json.id = note.path.key;
          return json;
        });
      });
  },

  createNote(text) {
    return axios.post('/api/notes', { text: text })
      .then(response => {
        return response.data;
      });
  }

};
