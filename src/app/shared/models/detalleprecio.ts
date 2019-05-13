import { Producto } from './producto';
import { Sucursal } from './sucursal';
import { Usuario } from './usuario';

export class Detalleprecio {
    idDetallePrecio: number;
    fechaHoraDetalle: string;
    precioFarmaco: number;
    productoIdProducto: number;
    sucursalIdSucursal: number;
    usuarioIdUsuario: number;
    estado?: boolean;
    productoIdProductoNavigation: Producto;
    sucursalIdSucursalNavigation: Sucursal;
    usuarioIdUsuarioNavigation: Usuario;
}