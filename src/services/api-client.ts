import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '4ea92cc390d64535a6f67e002fc28fe0',
  },
});
