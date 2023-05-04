import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:3001/api/v1" });

const setBearer = (token) =>
  (axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`);

const unSetBearer = () =>
  (axiosClient.defaults.headers.common["Authorization"] = "");

export default axiosClient;

export { setBearer, unSetBearer };
