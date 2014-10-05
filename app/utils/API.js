var axios = require('axios');

module.exports = {

  create: function(text) {
    return axios.post('/item', { text: text });
  }

};
