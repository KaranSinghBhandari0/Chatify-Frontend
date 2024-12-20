import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    // baseURL : 'https://chat-appb.up.railway.app/api',
    withCredentials: true,
});