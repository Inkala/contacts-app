import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://exercise.goldenspear.com/contacts.json'
});

export default axiosInstance;
