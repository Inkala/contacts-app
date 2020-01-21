import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://exercise.goldenspear.com'
});

export default axiosInstance;
