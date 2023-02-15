import axios from "axios";
const instrance = axios.create({
  baseURL: " http://localhost:3000",
});
instrance.interceptors.request.use(
  (config) => {
    return config;
  },
  (erro) => {
    return Promise.reject(erro);
  }
);

instrance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (erro) => {
    return Promise.reject(erro);
  }
);
export default instrance;
