import axios from "axios";
// import store from '../store/index';
 
const jwtInterceptor = axios.create({});
 
jwtInterceptor.interceptors.request.use((config) => {
  const authData = localStorage.getItem('access_token')
  config.headers.common["Authorization"] = `Bearer ${authData}`;
  return config;
});
export default jwtInterceptor;