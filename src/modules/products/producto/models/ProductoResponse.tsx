export interface ProductoResponse {
    id: number;
    categoria: number;
    codigo: string;
    nombre: string;
    precioVenta: number;
    stock: number;
    descripcion: string;
    activo: boolean;
    img?: string;
}