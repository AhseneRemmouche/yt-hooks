import axios from 'axios';
const KEY = 'AIzaSyDdWM68-BFhvzP04zd2-2si3ArFJPuY1DY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
