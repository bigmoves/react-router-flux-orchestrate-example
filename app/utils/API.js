var axios = require('axios');

module.exports = {

  create(text) {
    return axios.post('/item', { text: text })
      .then(response => {
        return response.data;
      });
  }

};
