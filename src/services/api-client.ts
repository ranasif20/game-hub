import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'fe2a562a60254d2694b22837cf3f6c87',
  },
});
