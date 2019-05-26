import { Farmaco } from './farmaco';
import { Laboratorio } from './laboratorio';
import { Detalleprecio } from './detalleprecio';

export class Producto {
    public constructor(init?: Partial<Producto >) {
        Object.assign(this, init);
    }

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