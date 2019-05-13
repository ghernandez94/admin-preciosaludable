import { Presentacion } from './presentacion';
import { Concentracion } from './concentracion';
import { Producto } from './producto';

export class Farmaco {
    idFarmaco: number;
    presentacionIdPresentacion: number;
    estado?: boolean;
    presentacionIdPresentacionNavigation: Presentacion;
    concentracion: Concentracion[];
    producto: Producto[];
}