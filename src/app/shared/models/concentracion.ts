import { Farmaco } from './farmaco';
import { Principioactivo } from './principioactivo';
import { Unidadmedida } from './unidadmedida';

export class Concentracion {
    idConcentracion: number;
    cantidad: number;
    unidadMedidaIdUnidadMedida: number;
    principioActivoIdPrincipioActivo: number;
    farmacoIdFarmaco: number;
    estado?: boolean;
    farmacoIdFarmacoNavigation: Farmaco;
    principioActivoIdPrincipioActivoNavigation: Principioactivo;
    unidadMedidaIdUnidadMedidaNavigation: Unidadmedida;
}
