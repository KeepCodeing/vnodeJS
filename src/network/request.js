import axios from 'axios'

export default function (config) {
  const instance = axios.create({
    baseURL: '',
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {
    return error;
  });

  return instance(config);
}
