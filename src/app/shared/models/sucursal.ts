import { Comuna } from './comuna';
import { Farmacia } from './farmacia';
import { Detalleprecio } from './detalleprecio';

export class Sucursal {
    idSucursal: number;
    farmaciaIdFarmacia: number;
    comunaIdComuna: number;
    direccionSucursal: string;
    latitud: number;
    longitud: number;
    telefonoSucursal: string;
    estado?: boolean;
    comunaIdComunaNavigation: Comuna;
    farmaciaIdFarmaciaNavigation: Farmacia;
    detalleprecio: Detalleprecio[];
}