import axios, { AxiosInstance } from "axios";

export const API_KEY = "TNZ7C3VdHoAtfaIm4nyGQQ";

export const AXIOS_SERVICE: AxiosInstance =
    axios.create(
        {
            responseType: 'json'
        }
    );

AXIOS_SERVICE.interceptors.request.use(
    async config => {
        config.baseURL = 'https://app.fakejson.com/q';
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