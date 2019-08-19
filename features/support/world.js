const { setWorldConstructor } = require("cucumber");
const axios = require('axios');

class CustomWorld {
  sendRequest(path) {
    this.res = axios.get('http://localhost:3000' + path);
    this.res_json = this.res.then(res => res.data);
  }
}

setWorldConstructor(CustomWorld);