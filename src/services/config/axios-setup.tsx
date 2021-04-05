import axios, { AxiosInstance } from "axios";

const DEV_URL = 'http://localhost:3001/api';
const BASE_URL = 'https://react-robouser.herokuapp.com/api';

export const AXIOS_SERVICE: AxiosInstance = axios.create({
    responseType: 'json'
});

AXIOS_SERVICE.interceptors.request.use(
    async (config) => {
        config.baseURL = BASE_URL;
        config.headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);