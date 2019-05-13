import { Unidadmedida } from './unidadmedida';
import { Farmaco } from './farmaco';

export class Presentacion {
    idPresentacion: number;
    nombrePresentacion: string;
    unidadMedidaIdUnidadMedida: number;
    estado: boolean;
    unidadMedidaIdUnidadMedidaNavigation: Unidadmedida;
    farmaco: Farmaco[];
}
