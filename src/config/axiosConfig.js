import axios from "axios";

const axiosClient = axios.create({ baseURL: "http://localhost:3001/api/v1" });

export default axiosClient;
