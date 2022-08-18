import axios from 'axios';

export default axios.create({
  // baseURL: `http://g-axon.work/jwtauth/api/`, //YOUR_API_URL HERE
  baseURL: `http://localhost:3001/apiauth/jwtauth`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
