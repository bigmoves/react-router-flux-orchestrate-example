var axios = require('axios');

module.exports = {

  createNote(text) {
    return axios.post('/notes', { text: text })
      .then(response => {
        return response.data;
      });
  }

};
