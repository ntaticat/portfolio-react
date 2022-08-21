import axios from "axios";

export default axios.create({
  baseURL: 'https://api.github.com/users/ntaticat',
  headers: {
    "Content-type": "application/json"
  }
});

