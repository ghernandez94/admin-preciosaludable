import { Provincia } from './provincia';
import { Sucursal } from './sucursal';

export class Comuna {
    idComuna: number;
    nombreComuna: string;
    provinciaIdProvincia: number;
    provinciaIdProvinciaNavigation: Provincia;
    sucursal: Sucursal[];
}
