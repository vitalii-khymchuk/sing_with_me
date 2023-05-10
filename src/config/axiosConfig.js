import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const axiosClient = axios.create({ baseURL });

const setBearer = (token) =>
  (axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`);

const unSetBearer = () =>
  (axiosClient.defaults.headers.common["Authorization"] = "");

export default axiosClient;

export { setBearer, unSetBearer };
