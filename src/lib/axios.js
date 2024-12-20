import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL : 'https://chatifyy.up.railway.app',
    withCredentials: true,
});