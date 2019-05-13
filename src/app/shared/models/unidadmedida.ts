import { Presentacion } from './presentacion';
import { Concentracion } from './concentracion';

export class Unidadmedida {
    idUnidadMedida: number;
    nombreUnidadMedida: string;
    simboloUnidadMedida: string;
    estado?: boolean;
    concentracion: Concentracion[];
    presentacion: Presentacion[];
}
