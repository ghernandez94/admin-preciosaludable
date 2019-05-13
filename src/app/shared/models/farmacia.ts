import { Sucursal } from './sucursal';

export class Farmacia {
    idFarmacia: number;
    rutfarmacia: string;
    nombreFarmacia: string;
    telefonoFarmacia: string;
    estado?: boolean;
    sucursal: Sucursal[];
}