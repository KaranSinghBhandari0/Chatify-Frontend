import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL || "http://localhost:3000",
    withCredentials: true,
});