import axios from 'axios';

class Api {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.lastModified = 0;
  }
  async get() {
    const response = await axios.get(this.endpoint);
    console.log("response =", response);
    const data = response.data;
    this.lastModified = data.lastModified;
    return data;
  }
  async getSearchResult() {
    const response = await axios.get('http://localhost:3000/api');
    const data = response.data;
    return data;
  }


}

export default Api;
