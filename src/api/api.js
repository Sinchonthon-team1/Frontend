import axios from "axios";

VITE_BASE_URL = "http://localhost:5173";

const URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
