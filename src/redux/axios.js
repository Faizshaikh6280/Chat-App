import axios from "axios";
import { BASE_URL } from "../config";

const axiosInstance = axios.create({ baseURL: BASE_URL });

// middleware : this code will after response sent.
axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "something went wrong."
    )
);

export default axiosInstance;
