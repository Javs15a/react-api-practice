import { CategoriaResponse } from "modules/products/categoria/models/CategoryResponse";
import { AXIOS_SERVICE } from "services/config/axios-setup";

const axiosInstance = AXIOS_SERVICE;

export const getAllCategorias = (): Promise<Array<CategoriaResponse>> => {
    return axiosInstance.get(`/categorias/all`)
        .then(resp => resp.data)
        .catch(err => err);
};