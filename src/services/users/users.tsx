import { User } from "modules/users/UserValues";
import { AXIOS_SERVICE } from "services/config/axios-setup";

const axiosInstance = AXIOS_SERVICE;

export const getAllUsers = (offset: number = 0) => {
    return axiosInstance.get(`/usuarios?desde=${offset}`)
        .then(resp => resp)
        .catch(err => err);
}

export const createUser = (user: User) => {
    return axiosInstance.post(`/usuarios`, user)
        .then(resp => resp)
        .catch(err => err);
}

export const updateUser = (user: User, id: string) => {
    return axiosInstance.put(`/usuarios/${id}`, user)
        .then(resp => resp)
        .catch(err => err);
}

export const deleteUser = (id: string) => {
    return axiosInstance.delete(`/usuarios/${id}`)
        .then(resp => resp)
        .catch(err => err);
}