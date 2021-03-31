import { AXIOS_SERVICE, API_KEY } from '../config/axios-setup';

const axiosInstance = AXIOS_SERVICE;

export const getPeople = () => {

    const payload = {
        token: API_KEY,
        data: {
            first_name: "nameFirst",
            last_name: "nameLast",
            email: "internetEmail",
            nickname: "personNickname",
            avatar: "personAvatar",
            phone: "phoneHome",
            _repeat: 10
        }
    };

    return axiosInstance.post(
        ``, payload)
        .then(data => data)
        .catch(error => error);
}