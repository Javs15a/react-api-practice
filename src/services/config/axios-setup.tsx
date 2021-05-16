import axios, { AxiosInstance } from "axios";

const HOST = '192.168.1.67';

export const AXIOS_SERVICE: AxiosInstance =
    axios.create(
        {
            responseType: 'json'
        }
    );

AXIOS_SERVICE.interceptors.request.use(
    async config => {
        config.baseURL = `http://${HOST}:4041/v1/mlts-store`;
        config.headers = {
            'Accept': ' application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);