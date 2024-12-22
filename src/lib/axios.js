import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chatifyy.up.railway.app",
    // baseURL: "http://localhost:3000",
    withCredentials: true,
});