import { Farmaco } from './farmaco';
import { Laboratorio } from './laboratorio';
import { Detalleprecio } from './detalleprecio';

export class Producto {
    idProducto: number;
    nombreComercialProducto: string;
    farmacoIdFarmaco: number;
    laboratorioIdLaboratorio: number;
    cantidadPresentacion: number;
    productoBioequivalente?: number;
    estado?: boolean;
    farmacoIdFarmacoNavigation: Farmaco;
    laboratorioIdLaboratorioNavigation: Laboratorio;
    productoBioequivalenteNavigation: Producto;
    detalleprecio: Detalleprecio[];
    inverseProductoBioequivalenteNavigation: Producto[];
}