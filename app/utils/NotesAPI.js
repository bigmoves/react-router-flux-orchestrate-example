var axios = require('axios');

module.exports = {

  list() {
    return axios.get('/api/notes')
      .then(response => {
        return response.data.map(item => {
          var json = item.value;
          json.id = item.path.key;
          return json;
        });
      });
  },

  fetchById(noteID) {
    return axios.get(`/api/notes/${noteID}`)
      .then(response => {
        return response.data;
      });
  },

  createNote(text) {
    return axios.post('/api/notes', { text: text })
      .then(response => {
        return response.data;
      });
  }

};
