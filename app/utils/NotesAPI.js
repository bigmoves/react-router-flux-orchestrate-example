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

  createNote(note) {
    return axios.post('/api/notes', note)
      .then(response => {
        return response.data;
      });
  },

  editNote(note) {
    return axios.put(`/api/notes/${note.id}`, note)
      .then(response => {
        return response.data;
      });
  },

  deleteNote(noteID) {
    return axios.delete(`/api/notes/${noteID}`)
      .then(response => {
        return response.data;
      });
  }

};
