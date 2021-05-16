import { ProductoResponse } from "modules/products/producto/models/ProductoResponse";

export interface CategoriaResponse {
    id: number;
    nombre: string;
    activo: boolean;
    descripcion?: string;
    articulos?: Array<ProductoResponse>;
}